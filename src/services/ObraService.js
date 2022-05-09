import {
    Api
} from "helpers/Api";

const parseResponse = (response) => response.json()

const transformObra = (obra) => {
    if (obra.possuiAnime === 'Sim' || obra.possuiAnime === 'sim' || obra.possuiAnime === 'SIM') {
        obra.possuiAnime = true;
    } else {
        obra.possuiAnime = false;
    }

    return {
        ...obra,
        _id: obra._id,
        nome: obra.nome,
        possuiAnime: obra.possuiAnime
    };

}

const parseTransformList = (response) => parseResponse(response).then((obras) => obras.map(transformObra))

const parseTransformItem = (response) => parseResponse(response).then(transformObra)


export const ObraService = {
    getList: () =>
        fetch(Api.obraList(), {
            method: "GET"
        }).then(parseTransformList),
    getById: (id) =>
        fetch(Api.obraById(id), {
            method: "GET"
        }).then(parseTransformItem),
    create: (obra) =>
        fetch(Api.createObra(), {
            method: "POST",
            body: JSON.stringify(obra),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(parseTransformItem),
    updateById: (id, obra) =>
        fetch(Api.updateObraById(id), {
            method: "PUT",
            body: JSON.stringify(obra),
            mode: "cors", 
            headers: {
                "Content-Type": "application/json"
            }
        }).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteObraById(id), { 
            method: "DELETE"
        }).then(parseResponse)
};