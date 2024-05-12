<h1>Unleash the Power of Wizdom in Stremio!</h1>
<p>Stremio with Hebrew Subtitles? Mazel Tov!</p>

<img src="https://i.ibb.co/KLYK0TH/wizdon256.png" style="width: 100px; height: 110px; border-radius: 5px;"><img
    src="https://www.stremio.com/website/stremio-logo-small.png" style="width: 100px; height: 100px;">


<h2>Features: Your Entertainment Advantage</h2>
<ul>
    <li>
        <b>Free to Use:</b> Enjoy the full functionality of the addon without any cost.
    </li>
    <li>
        <b>Easy to Use:</b> No searching the web, just instant delivered with hebrew subtitles, no need for extra steps.
    </li>
    <li>
        <b>Intelligent Organization:</b> The addon prioritizes the most compatible subtitles for your content, saving you time and frustration.
    </li>
    <li>
        <b>Smart Indication:</b> Hover over subtitles to display their full name, making it easier to select the right content.
    </li>
    <li>
        <b>Constantly Evolving:</b> The development team is dedicated to continuous improvement, ensuring the best
        possible experience.
    </li>
</ul>

</br>

<h2>Easy as 1, 2, Hebrew!</h2>
<ol>
    <li>
        <b>Launch Stremio</b>
    </li>
    <li>
        <b>Install Addon:</b> 
        <ol>
            <li>
                <b>Via Stremio:</b> Navigate to the addon center and search for <b>Wizdom Subtitles</b>
            </li>
            <li>
                <b>Via Link:</b> Click or Enter the following URL: <b>stremio://stremio-wizdom-addon-mcty.onrender.com/manifest.json</b>
            </li>
        </ol>
    </li>
    <li>
        <b>You're good to go!</b>
        <ol>
            <li>
                Open any movie or TV series.
            </li>
            <li>
                Click on the subtitles icon.
            </li>
            <li>
                Navigate to the <b>"עברית"</b> section.
            </li>
            <li>
                Choose a subtitle from the list <b>(The 1st is the most compatible)</b>.
            </li>
        </ol>
    </li>
</ol>

</br>

<h2>Future Improvements: The Road Ahead</h2>
<ul>
    <li>
        <b>Cache System:</b> Enhance performance by enabling faster retrieval of frequently used subtitles.
    </li>
</ul>

</br>

<h2>Technical Details</h2>
<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/manifest.json</td>
            <td>Accessible link to download the addon directly from the Stremio addon center.</td>
        </tr>
        <tr>
            <td>/:imdbID/:season/:episode/:subtitleID.srt</td>
            <td>Endpoint to extract the subtitle from a ZIP archive and return it in the widely-used SRT format.</td>
        </tr>
        <tr>
            <td>/subtitles/:contentType/:compoundID/:extraArgs.json</td>
            <td>Stremio API endpoint to retrieve information about the content you're currently watching.</td>
        </tr>
    </tbody>
</table>

</br>

<h2>Support</h2>
<p>For any questions or issues, please open an issue on the GitHub repository or contact the me directly.</p>

</br>

<h2>Contributing</h2>
<p> We welcome contributions from the community. If you are interested in contributing to this project, please follow
    these guidelines </p>
<ul>
    <li>Fork the repository and create a new branch for your changes.</li>
    <li>Make your changes and ensure that the code is well-documented and properly tested.</li>
    <li>Open a pull request and provide a clear and detailed explanation of your changes and the reasoning behind them.
    </li>
    <li>Be prepared to answer questions and address any issues or feedback on your pull request.</li>
</ul>
