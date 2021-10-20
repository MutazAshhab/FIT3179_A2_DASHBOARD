var viz = 'js/visualizations/australia-visualizations/Commute.vg.json';
vegaEmbed('#embed_bar_chart', viz)
    .then(function (result) {})
    .catch(console.error);

var viz =
    'js/visualizations/country-map-visualizations/Freedom-to-make-life-choices-visualization.vg.json';
vegaEmbed('#embed_country_choropleth', viz)
    .then(function (result) {})
    .catch(console.error);

load_bar_button = document.getElementById('load-bar-viz');
bar_chart_select = document.getElementById('bar_chart_selector');

load_bar_button.addEventListener('click', () => {
    // console.log('clicked');

    const filename =
        bar_chart_select.options[bar_chart_select.selectedIndex].value;
    // console.log('filename: ' + filename);

    const viz_selected = `js/visualizations/australia-visualizations/${filename}.vg.json`;
    // console.log(viz_selected);

    vegaEmbed('#embed_bar_chart', viz_selected)
        .then(function (result) {})
        .catch(console.error);
});

load_country_choro = document.getElementById('load-choro-countries');
choropleth_select = document.getElementById('choropleth_selector');

load_country_choro.addEventListener('click', () => {
    const filename =
        choropleth_select.options[choropleth_select.selectedIndex].value;

    const viz_selected = `js/visualizations/country-map-visualizations/${filename}.vg.json`;

    vegaEmbed('#embed_country_choropleth', viz_selected)
        .then(function (result) {})
        .catch(console.error);
});
