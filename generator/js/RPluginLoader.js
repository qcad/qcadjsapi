
      // auto generated
      //var self;

      // class constructor:
      function RPluginLoader() {
        

        // should be RPluginLoader_BaseJs.call(this, engine):
        //RPluginLoader.prototype = new RPluginLoader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPluginLoader.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPluginLoader);
                
            //}
          }
          else {
            qWarning("RPluginLoader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPluginLoader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPluginLoader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //RPluginLoader.prototype = new RPluginLoader_BaseJs(engine);
      //RPluginLoader.prototype = new RPluginLoader_Wrapper(engine);
      RPluginLoader.prototype = new Object();

      RPluginLoader.prototype.toString = function() {
          //return "RPluginLoader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPluginLoader [JS]";
        };
      RPluginLoader.getObjectType = function() {
        return RJSType_RPluginLoader.getIdStatic();
      };

      RPluginLoader.prototype.getObjectType = function() {
        return RJSType_RPluginLoader.getIdStatic();
      };

      RPluginLoader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPluginLoader.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RPluginLoader.getPluginSuffix = function() 
          
        {
          //print("JS: RPluginLoader.getPluginSuffix");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.getPluginSuffix(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.getPluginSuffix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.getPluginFiles = function() 
          
        {
          //print("JS: RPluginLoader.getPluginFiles");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.getPluginFiles(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.getPluginFiles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.loadPlugins = function() 
          
        {
          //print("JS: RPluginLoader.loadPlugins");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.loadPlugins(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.loadPlugins(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.unloadPlugins = function() 
          
        {
          //print("JS: RPluginLoader.unloadPlugins");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.unloadPlugins(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.unloadPlugins(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.loadPlugin = function() 
          
        {
          //print("JS: RPluginLoader.loadPlugin");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.loadPlugin(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.loadPlugin(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.unloadPlugin = function() 
          
        {
          //print("JS: RPluginLoader.unloadPlugin");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.unloadPlugin(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.unloadPlugin(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.unloadPlugin(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.postInitPlugins = function() 
          
        {
          //print("JS: RPluginLoader.postInitPlugins");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.postInitPlugins(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.postInitPlugins(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.postInitPlugin = function() 
          
        {
          //print("JS: RPluginLoader.postInitPlugin");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.postInitPlugin(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.postInitPlugin(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.initTranslations = function() 
          
        {
          //print("JS: RPluginLoader.initTranslations");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.initTranslations(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.initTranslations(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.countPlugins = function() 
          
        {
          //print("JS: RPluginLoader.countPlugins");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.countPlugins(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.countPlugins(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.getPluginInfo = function() 
          
        {
          //print("JS: RPluginLoader.getPluginInfo");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.getPluginInfo(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.getPluginInfo(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.getPluginInfo(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.getPluginsPath = function() 
          
        {
          //print("JS: RPluginLoader.getPluginsPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.getPluginsPath(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.getPluginsPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.hasPlugin = function() 
          
        {
          //print("JS: RPluginLoader.hasPlugin");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.hasPlugin(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.hasPlugin(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.checkPluginLicenses = function() 
          
        {
          //print("JS: RPluginLoader.checkPluginLicenses");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.checkPluginLicenses(
                  
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.checkPluginLicenses(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPluginLoader.checkPluginLicense = function() 
          
        {
          //print("JS: RPluginLoader.checkPluginLicense");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPluginLoader_WrapperSingletonInstance.checkPluginLicense(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPluginLoader);
  }

  
  else {
    
        print("RPluginLoader.checkPluginLicense(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPluginLoader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPluginLoader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      