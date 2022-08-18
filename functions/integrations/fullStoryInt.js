function onPersonalizationResult(e){
    FS.event(eventName, {
        "Personlization_Heading": e.name,
        "Personlization_Treatment": e.variantIds,
        "User_in_Holdback": e.control,
    })
}

function plugInit(context){
    console.log("INIT: ", context)
    context.events.on("personalizationResult", onPersonalizationResult);
}

export function fullStoryPlugin(){
    return {
        init: plugInit
    }
}