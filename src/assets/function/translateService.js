export function getTranslate(text) {
    const data = JSON.stringify([[[text], "auto", "mg"], "te"]);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://translate-pa.googleapis.com/v1/translateHtml", false);
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Content-Type", "application/json+protobuf");
    xhr.setRequestHeader("x-goog-api-key", "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520");
    xhr.send(data);
    if (xhr.status === 200) {
        const responseText = xhr.responseText.split('"],')[0].replaceAll("[", "").replace('"','');
        // Décodage des entités HTML en texte brut
        const parser = new DOMParser();
        const decodedText = parser.parseFromString(responseText, "text/html").body.textContent;
        return decodedText;
    }
}

 
