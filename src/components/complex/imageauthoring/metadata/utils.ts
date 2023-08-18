// Metadata.dropdown.ts line 22 orderSelection
// removePremiumFeature: (hostId, orderSelection) => {
//     let arr = [];
//     Object.keys(orderSelection).forEach(function (key) {
//         var value = orderSelection[key];
//         if (key && key.toLocaleLowerCase() !== "select") {
//             arr.push({
//                 "label": key,
//                 "value": value
//             })
//         }
//     });

//     if (!_.isEmpty(AppSDK['FeaturesConfig'])) {
//         const config = AppSDK['FeaturesConfig']['features']['metadata'];
//         if (!_.isEmpty(config)) {
//             const metadata = config[hostId] ? config[hostId] : null
//             const metavalues = metadata && metadata[AMP_METADATA] ? metadata[AMP_METADATA] : []
//             if (!_.isEmpty(metavalues)) {
//                 metavalues.forEach((i) => {
//                     const _index = _.findIndex(arr, { "value": i })
//                     if (_index > -1) {
//                         arr.splice(_index, 1)
//                     }
//                 })
//             }
//         }
//     }
//     return arr;
// }