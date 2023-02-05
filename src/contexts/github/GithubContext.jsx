import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // get search results
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                "accept": "application/vnd.github+json",
                "Authorization": `Bearer ${GITHUB_TOKEN}`
            }
        });

        const { items: data } = await response.json();

        dispatch({
            type: "GET_USERS",
            payload: data
        });
    }

    // get single user
    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                "accept": "application/vnd.github+json",
                "Authorization": `Bearer ${GITHUB_TOKEN}`
            }
        });

        if (response.status === 404) {
            window.location = "/notfound";
        }
        else {
            const data = await response.json();

            dispatch({
                type: "GET_USER",
                payload: data
            });
        }
    }

    // get user repos
    const getUserRepos = async (login) => {
        setLoading();

        const params = new URLSearchParams({
            sort: "created",
            per_page: 10
        })
        
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                "accept": "application/vnd.github+json",
                "Authorization": `Bearer ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: "GET_REPOS",
            payload: data
        });
    }

    const clearResults = () => {
        dispatch({
            type: "CLEAR_RESULTS"
        });
    }

    const setLoading = () => dispatch({ type: "SET_LOADING" })

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearResults
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;