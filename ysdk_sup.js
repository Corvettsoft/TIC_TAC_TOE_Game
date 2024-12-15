const ysdk = await YaGames.init();

// Сообщаем платформе, что игра загрузилась и можно начинать играть.
ysdk.features.LoadingAPI?.ready()