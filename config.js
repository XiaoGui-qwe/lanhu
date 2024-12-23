(function (window){
    function setSizeConfig(max,unit){
        var config ={};
        for(var i=1;i<=max;i++){
            config[i] = `${i}${unit}`;
        }
        return config;  
    }
    
    window.tailwind.config = {
        // 开启暗黑模式
    darkMode: 'selector',
      theme: {
        extend: {
          colors: {
            clifford: '#da373d'
          },
          fontSize: setSizeConfig(100,'px'),
          width: setSizeConfig(1920,'px'),
          height: setSizeConfig(1920,'px'),
          backgroundImage: {
            'custom-gradient': 'linear-gradient(90deg, #934BFF, #5F3AFC)',
           'custom-gradient-2': 'hsla(231, 62%, 58%, 1)',
          },
        }
      }
    }
})(window);

