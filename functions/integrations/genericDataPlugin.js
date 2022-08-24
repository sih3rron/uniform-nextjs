function onPersonalizationResult(e){
        //console.log("P13N: ", e)
        const theWindow = typeof window !== 'undefined' ? window : undefined;
        const isGtagConfigured = ()=>{
            return typeof theWindow !== 'undefined' && typeof theWindow.gtag === 'function';
        }

        if(isGtagConfigured){
            theWindow?.gtag?.('event', 'Uniform_Personalization', e);
            theWindow?.gtag?.('event', 'screen_view', e);
            console.log("GTAG_Ev: ", e)
            
        }
}

/* function onTestResult(e){
    console.log("E13N: ", e)
} */

function plugInit(context){
    //console.log("INIT: ", context)
    context.events.on("personalizationResult", onPersonalizationResult);
   // context.events.on("testResult", onTestResult);
}

export function genericDataPlugin(){
    return {
        init: plugInit
    }
}