const sources = ['source1', 'source2', 'source3']

function loadData() {
    const currentUrl = window.location.href;
    let data = currentUrl.match(/\/([^\/]+)\/configure$/);
    if (data && data[1].startsWith("ey")) {
        data = atob(data[1]);
        data = JSON.parse(data);

        for (let source of sources) {
            document.getElementById(source).checked = data[source];
        }
    }
}

loadData();

function getLink(method) {
    const selectedSources = [];

    console.log('Test');

    sources.forEach(source => {
        if (document.getElementById(source).checked) {
            selectedSources.push(source);
        }
    });

    let data = {};

    for (let source of sources) {
        data[source] = selectedSources.includes(source);
    }


    let stremio_link = `${window.location.host}/${btoa(JSON.stringify(data))}/manifest.json`;

    if (method === 'link') {
        window.open(`stremio://${stremio_link}`, "_blank");
    } else if (method === 'copy') {
        const link = window.location.protocol + '//' + stremio_link;

        if (!navigator.clipboard) {
            alert('Your browser does not support clipboard');
            console.log(link);
            return;
        }

        navigator.clipboard.writeText(link).then(() => {
            alert('Link copied to clipboard');
        }, () => {
            alert('Error copying link to clipboard');
        });
    }
}