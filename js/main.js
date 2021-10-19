var viz = 'js/visualizations/Commute.vg.json';
vegaEmbed('#embed_bar_chart', viz)
    .then(function (result) {})
    .catch(console.error);

load_button = document.getElementById('load-viz');
select = document.getElementById('bar_chart_selector');

load_button.addEventListener('click', () => {
    // console.log('clicked');

    const filename = select.options[select.selectedIndex].value;
    // console.log('filename: ' + filename);

    const viz_selected = `js/visualizations/${filename}.vg.json`;
    // console.log(viz_selected);

    vegaEmbed('#embed_bar_chart', viz_selected)
        .then(function (result) {})
        .catch(console.error);
});
