const ObraContext = {
    obraEndpoint: () => `${Api.baseUrl}/obras`,
    obraList: () => `${ObraContext.obraEndpoint()}/all-obras`,
    obraById: (id) => `${ObraContext.obraEndpoint()}/one-obra/${id}`,
    createObra: () => `${ObraContext.obraEndpoint()}/create-obra`,
    updateObraById: (id) => `${ObraContext.obraEndpoint()}/update-obra/${id}`,
    deleteObraById: (id) => `${ObraContext.obraEndpoint()}/delete-obra/${id}`
};

export const Api = {
    baseUrl: "http://localhost:4000",
    ...ObraContext,
}