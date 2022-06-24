<h1 align="center" id="title">Kalmarv Bot</h1>

A Discord bot I wrote for my personal discord server.

## Commands

- help > Show a help message with all commands
- ping > Tests the bot connection
- pfp > Get the profile picture of any mentioned users
- playing > Uses the backend from [ascent](https://github.com/Kalmarv/ascent) to get the last played song of a last.fm user
- laugh > Laugh at any user
- r > Get a random post from a subreddit
  - This command wraps the SnooWrap library further to parse media and send a direct link to the media

## Deployment

### Environment Variables

- `DISCORD_TOKEN`: The Discord bot token
  - You can get this from https://discord.com/developers/
- `CLIENT_ID`: The client ID of your Reddit Application
- `CLIENT_SECRET`: The client secret of your Reddit Application
- `USERNAME`: The username of the Reddit account with the application
- `PASSWORD`: The password of the Reddit account with the application
- `COMMAND_PREFIX`: The prefix for all commands

I use [Railway](https://railway.app/) to host the bot.

You can click the below button, enter the environment variables and deploy the bot.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/U_Wcwr?referralCode=EK4u1N)

## License

This project is licensed under the MIT License
