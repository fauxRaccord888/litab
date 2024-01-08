import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "$lib/stores/store";
import { fetchPreferenceData } from "$lib/stores/registerSlice";

import PreferenceTest from "./PreferenceTest";

export default function Register() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchPreferenceData())
    }, [dispatch])

    return (
        <div className="register-outer-container">
            <PreferenceTest />
        </div>
    )
}