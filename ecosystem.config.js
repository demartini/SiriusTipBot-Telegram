module.exports = {
  apps: [
    {
      name: "SiriusTipBot-Telegram",
      script: "./SiriusTip.py",
      interpreter: "/usr/bin/python",
      output: "/home/siriusteam/tipbot-telegram/logs/out.log",
      error: "/home/siriusteam/tipbot-telegram/logs/error.log",
      log: "/home/siriusteam/tipbot-telegram/logs/combined.outerr.log",
      watch: true,
      max_memory_restart: "1G",
    },
  ],
};
