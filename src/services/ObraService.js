import { Api } from "helpers/Api";

const parseResponse = (response) => response.json()

export const ObraService = {
    getList: () =>
        fetch(Api.obraList(), {
            method: "GET"
        }).then(parseResponse),
    getById: (id) =>
        fetch(Api.obraById(id), {
            method: "GET"
        }).then(parseResponse),
    create: () =>
        fetch(Api.createObra(), {
            method: "POST"
        }).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateObraById(), {
            method: "PUT"
        }).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteObraById(), {
            method: "DELETE"
        }).then(parseResponse)
};