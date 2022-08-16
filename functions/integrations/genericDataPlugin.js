function onPersonalizationResult(e){
    console.log("P13N: ", e)
}

function plugInit(context){
    console.log("INIT: ", context)
    context.events.on("personalizationResult", onPersonalizationResult);
}

export function genericDataPlugin(){
    return {
        init: plugInit
    }
}