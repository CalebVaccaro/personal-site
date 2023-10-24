---
layout: eafu.njk
title: EAFU
imagePath: /media/eafu/eafu.png
description: A open-source lightweight project to connect Azure Services to Unity applications.
detailedDescription: After working in backend and game services, I knew there was a need for easy upkeep for game developers. So, I created an open-source lightweight API for Unity to access backend services with minimal setup. Specifically made for Azure Functions, the API can be used for other services, like AWS with a few header changes. I created a sample Unity project to help others understand how it works. 
technologies:
- C#
- Unity
- Azure Functions
---

### Game API Example

The GameApi class, built using the Easy Azure Functions for Unity (EAFU) library, simplifies interactions with backend services. It provides methods like CreatePlayer to send player data and GetLeaderboard to fetch leaderboard data from Azure Functions.

[Serializable]
public class GameApi : EAFUApi
{
    public Player player { get; set; }

    public void CreatePlayer(string name, int score, int gameDuration, Action<object> PostPlayerAction)
    {
        player = new Player(name, score, gameDuration);
        Post(player, PostPlayerAction);
    }

    public void GetLeaderboard(Action<List<Player>> GetLeaderboardsAction) => Get(GetLeaderboardsAction);
}

You can use an instance of GameApi to create a player and update the leaderboard in two action callbacks:

// Post Player subscribte GetLeaderboards after creating Player
gameApi.CreatePlayer(playerName, score, gameDuration, postPlayerAction => {
     // Get Leaderboards and Set Game UI
     gameApi.GetLeaderboard(SetLeaderboard));
}