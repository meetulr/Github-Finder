import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

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

        const {items: data} = await response.json();

        dispatch({
            type: "GET_USERS",
            payload: data
        });
    }

    const clearResults = () => {
        dispatch({
            type: "CLEAR_RESULTS"
        });
    }

    const setLoading = () => dispatch({type: "SET_LOADING"})

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearResults
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;