let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    

    //Localizor and Load
    exports.onLoadGame = settings => {
        GetRootScope().showMessage("CJ5Boss", "You have also initialized with the Boss Beginner Extensions mod.");

        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            
        }
    }
}