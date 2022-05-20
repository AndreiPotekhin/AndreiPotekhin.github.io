//
// // import { BLOCKS } from 'https://cdn.jsdelivr.net/npm/@contentful/rich-text-types@15.12.1/dist/index.min.js';
//
// var client = contentful.createClient({
//     space: '727hw8hc8p0s',
//     accessToken: '9zqAZSNtLI_ytgNLcsh1ykeTOJmE3g_6IU6dV4qLc4I',
// });
//
// client
//     .getEntries({
//         content_type: 'caseStudy',
//     })
//     .then(function (entries) {
//         entries.items.forEach(function (entry) {
//
//             var title = entry.fields.title;
//             var desc = entry.fields.description;
//             var imgUrl = ('https:' + entry.fields.coverImage.fields.file.url);
//             var date = moment(entry.fields.publicationDate).format('MMMM D, YYYY');
//             var con = (documentToHtmlString(entry.fields.content));
//
//             jQuery('#post').append('<div class="post-content">' +
//                 '<h1 class="title">'+title+'</h1>' +
//                 '<h4 class="description">'+desc+'</h4>' +
//                 '<p class="date">'+date+'</p>' +
//                 '<img class="cover-img" src=" '+imgUrl+' ">' +
//                 '<p>'+con+'</p>' +
//                 '</div>')
//
//         });
//     });
//
// // const options = {
// //     renderNode: {
// //         [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
// //             `<img src="${fields.file.url}"/>`,
// //     },
// // };