const gifts = ["cat", "game", "socks"];

    function wrapping(gifts) {
      let wrapper = "*";
      let wrapped = gifts.map(function (x) {
        return `${wrapper.repeat(
          x.length + 2
        )}\n*${x}*\n${wrapper.repeat(x.length + 2)}`;
      });

      return wrapped;
    }
    const wrapped = wrapping(gifts);

    console.log(wrapped);

    