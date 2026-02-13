import api from "@/lib/axios";
import type { ProjectFormData } from "@/types/index";
import { isAxiosError } from "axios";

export const createProject = async(formData: ProjectFormData) => {
    try {
        const { data } = await api.post('/projects', formData);
        return data;
    } catch (error) {
        if(isAxiosError(error)){
            throw new Error(error.response?.data.error);
        }
    }
}

export const getProjects = async() => {
    try {
        const { data } = await api('/projects');
        return data;
    } catch (error) {
        if(isAxiosError(error)){
            throw new Error(error.response?.data.error);
        }
    }
}