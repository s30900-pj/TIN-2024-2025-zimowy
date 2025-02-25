let currentData = null;
let previousStockData = null;
let newsHistory = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchData();

    setInterval(fetchData, 10000);
});

function fetchData() {
    fetch('http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php')
        .then(response => response.json())
        .then(data => {
            if (checkIfDataChanged(data)) {
                updateDOM(data);
            }
        })
        .catch(error => console.error(error));
}

function checkIfDataChanged(newData) {
    const dataChanged = JSON.stringify(newData) !== JSON.stringify(currentData);

    if (dataChanged) {
        updateNewsHistory(newData.news);
    }

    return dataChanged;
}

function updateDOM(data) {
    const dataContainer = document.getElementById('data-container');
    const newsRotator = document.getElementById('news-rotator');

    dataContainer.innerHTML = `<p>${formatStockData(data.stock)}</p>`;

    const recentNewsHTML = newsHistory.slice(0, 3).map(newsItem => `<div>${newsItem}</div>`).join('');
    newsRotator.innerHTML = recentNewsHTML;

    currentData = data;

    const newsItems = newsRotator.querySelectorAll('div');
    startNewsRotator(newsItems);
}

function formatStockData(stockData) {
    const stockText = Object.entries(stockData).map(([company, value]) => {
        let changeIndicator = '';

        if (previousStockData && previousStockData[company] !== undefined) {
            const previousValue = previousStockData[company];
            if (value > previousValue) {
                changeIndicator = '<span class="up">⬆</span>';
            } else if (value < previousValue) {
                changeIndicator = '<span class="down">⬇</span>';
            } else {
                changeIndicator = '<span class="no-change">-</span>';
            }
        }

        return `${company}: ${value} ${changeIndicator}`;
    }).join(', ');

    previousStockData = { ...stockData };

    return `Kursy akcji: ${stockText}`;
}

function updateNewsHistory(newNews) {
    newsHistory.unshift(newNews);
    if (newsHistory.length > 3) {
        newsHistory.pop();
    }
}

function startNewsRotator(newsItems) {
    let currentIndex = 0;

    setInterval(() => {
        const activeItem = document.querySelector('.rotator div.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }

        currentIndex = (currentIndex + 1) % newsItems.length;
        const nextItem = newsItems[currentIndex];

        if (nextItem) {
            nextItem.classList.add('active');
        }
    }, 3000);
}
