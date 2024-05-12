<h1>Unleash the Power of Wizdom in Stremio!</h1>
<p> Stremio with Hebrew Subtitles? Mazel Tov! </p>

<img src="https://i.ibb.co/KLYK0TH/wizdon256.png" style="width: 100px; height: 110px; border-radius: 5px;"><img
    src="https://www.stremio.com/website/stremio-logo-small.png" style="width: 100px; height: 100px;">


<h2>Stremio & Wizdom: The Dual Powerhouses!</h2>
<ul>
    <li>
        Stremio: Your Content Hub. Discover, manage, and watch all your shows and movies from various streaming
        services in a single, unified platform.
    </li>
    <li>
        Wizdom: Your Hebrew Subtitle Oasis. Access a vast library of Hebrew subtitles to ensure seamless
        understanding of any movie or TV series.
    </li>
</ul>


<h2>Effortless Entertainment: Hebrew Made Easy</h2>
<ul>
    <li>
        Effortless Hebrew Subtitles: No more juggling subtitles or scouring the web. Find the perfect Hebrew
        subtitles for your current Stremio content with just a few clicks.
    </li>
    <li>
        Seamless Integration: The addon works seamlessly within Stremio. No need to switch between apps or
        navigate complex menus.
    </li>
    <li>
        Wide Content Compatibility: Enjoy Hebrew subtitles for a vast library of movies and TV series, ensuring
        you're covered for your favorite content.
    </li>
    <li>
        Always Up-to-Date: The addon is constantly updated to support the latest Stremio features and ensure smooth
        functionality.
    </li>
</ul>


<h2>Easy as 1, 2, Hebrew!</h2>
<ol>
    <li>
        Launch Stremio.
    </li>
    <li>
        Install Addon. 
        <ol>
            <li>
                Via Stremio: Navigate to the addon center and search <b>Wizdom Subtitles</b>.
            </li>
            <li>
                Via Link: Click or Enter the following URL <b>stremio://stremio-wizdom-addon-mcty.onrender.com/manifest.json</b>.
            </li>
        </ol>
    </li>
    <li>
        You good to go!
        <ol>
            <li>
                Open any movie or TV series.
            </li>
            <li>
                Click on the subtitles icon.
            </li>
            <li>
                Navigate to "עברית" section.
            </li>
            <li>
                Pick a subtitle from the list (The 1st is with the highest match compatbility).
            </li>
        </ol>
    </li>
</ol>


<h2>Features: Your Entertainment Advantage</h2>
<ul>
    <li>
        Free to Use: Enjoy the full functionality of the addon without any cost.
    </li>
    <li>
        Easy to Use: No searching the web, just instant delivered with hebrew subtitles, no need for extra steps.
    </li>
    <li>
        Smart Organization: The addon prioritizes the most compatible subtitles for your content, saving you time
        and frustration.
    </li>
    <li>
        Hovering the subtitle display its full name, easier to adjust to the right watched content.
    </li>
    <li>
        Constantly Evolving: The development team is dedicated to continuous improvement, ensuring the best
        possible experience.
    </li>
</ul>


<h2>Future Improvements: The Road Ahead</h2>
<ul>
    <li>
        Cache System: Enhance performance by enabling faster retrieval of frequently used subtitles.
    </li>
</ul>


<h2>Endpoints: Under the Hood</h2>
<p> For those technically curious, here's a breakdown of the crucial endpoints utilized by the addon: </p>
<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> /manifest.json </td>
            <td> This accessible link serves as the gateway to download the addon directly from the Stremio addon
                center. </td>
        </tr>
        <tr>
            <td> /subtitles/:contentType/:compoundID/:extraArgs.json </td>
            <td> This Stremio API endpoint helps retrieve information about the content you're currently watching. </td>
        </tr>
        <tr>
            <td> /:subtitleId.srt </td>
            <td> This endpoint acts as the bridge between Wizdom and Stremio. It handles extracting the subtitle from a
                RAR archive and returning it in the widely-used SRT format. </td>
        </tr>
    </tbody>
</table>


<h2>Support</h2>
<p>For any questions or issues, please open an issue on the GitHub repository or contact the me directly.</p>


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
