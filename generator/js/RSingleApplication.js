
      // auto generated
      //var self;

      // class constructor:
      function RSingleApplication() {
        

        // should be RSingleApplication_BaseJs.call(this, engine):
        //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSingleApplication.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSingleApplication);
            //}
          }
          else {
            qWarning("RSingleApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSingleApplication.js: No constructor found for class RSingleApplication");
            
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["screenAdded(QScreen*)"] = Object.getPrototypeOf(this).screenAdded;
  
    this["screenRemoved(QScreen*)"] = Object.getPrototypeOf(this).screenRemoved;
  
    this["primaryScreenChanged(QScreen*)"] = Object.getPrototypeOf(this).primaryScreenChanged;
  
    this["focusObjectChanged(QObject*)"] = Object.getPrototypeOf(this).focusObjectChanged;
  
    this["applicationStateChanged(Qt::ApplicationState)"] = Object.getPrototypeOf(this).applicationStateChanged;
  
    this["layoutDirectionChanged(Qt::LayoutDirection)"] = Object.getPrototypeOf(this).layoutDirectionChanged;
  
    this["paletteChanged(QPalette)"] = Object.getPrototypeOf(this).paletteChanged;
  
    this["fontChanged(QFont)"] = Object.getPrototypeOf(this).fontChanged;
  
    this["focusChanged(QWidget*,QWidget*)"] = Object.getPrototypeOf(this).focusChanged;
  
    this["messageReceived(QString)"] = Object.getPrototypeOf(this).messageReceived;
  
    this["fileOpenRequestReceived(QString)"] = Object.getPrototypeOf(this).fileOpenRequestReceived;
  
          }
        }
      }

      //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);
      //RSingleApplication.prototype = new RSingleApplication_Wrapper(engine);
      RSingleApplication.prototype = new Object();

      RSingleApplication.prototype.toString = function() {
          //return "RSingleApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSingleApplication [JS]";
        };
      RSingleApplication.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSingleApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QCoreApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGuiApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QApplication.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RSingleApplication.tr = function() 
          
        {
          //print("JS: RSingleApplication.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setAttribute = function() 
          
        {
          //print("JS: RSingleApplication.setAttribute");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setAttribute(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.testAttribute = function() 
          
        {
          //print("JS: RSingleApplication.testAttribute");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.testAttribute(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.testAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setSetuidAllowed = function() 
          
        {
          //print("JS: RSingleApplication.setSetuidAllowed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setSetuidAllowed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.isSetuidAllowed = function() 
          
        {
          //print("JS: RSingleApplication.isSetuidAllowed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.isSetuidAllowed(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.isSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.instance = function() 
          
        {
          //print("JS: RSingleApplication.instance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.instance(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.instance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.processEvents = function() 
          
        {
          //print("JS: RSingleApplication.processEvents");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.processEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.processEvents(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.processEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.exit = function() 
          
        {
          //print("JS: RSingleApplication.exit");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.exit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.exit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.sendEvent = function() 
          
        {
          //print("JS: RSingleApplication.sendEvent");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.sendEvent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.sendEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.postEvent = function() 
          
        {
          //print("JS: RSingleApplication.postEvent");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.postEvent(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.postEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.sendPostedEvents = function() 
          
        {
          //print("JS: RSingleApplication.sendPostedEvents");
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.sendPostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.sendPostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.removePostedEvents = function() 
          
        {
          //print("JS: RSingleApplication.removePostedEvents");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.removePostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.removePostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.startingUp = function() 
          
        {
          //print("JS: RSingleApplication.startingUp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.startingUp(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.startingUp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.closingDown = function() 
          
        {
          //print("JS: RSingleApplication.closingDown");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.closingDown(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.closingDown(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.applicationDirPath = function() 
          
        {
          //print("JS: RSingleApplication.applicationDirPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.applicationDirPath(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.applicationDirPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.applicationFilePath = function() 
          
        {
          //print("JS: RSingleApplication.applicationFilePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.applicationFilePath(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.applicationFilePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.applicationPid = function() 
          
        {
          //print("JS: RSingleApplication.applicationPid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.applicationPid(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.applicationPid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setLibraryPaths = function() 
          
        {
          //print("JS: RSingleApplication.setLibraryPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setLibraryPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setLibraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.libraryPaths = function() 
          
        {
          //print("JS: RSingleApplication.libraryPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.libraryPaths(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.libraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.addLibraryPath = function() 
          
        {
          //print("JS: RSingleApplication.addLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.addLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.addLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.removeLibraryPath = function() 
          
        {
          //print("JS: RSingleApplication.removeLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.removeLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.removeLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.installTranslator = function() 
          
        {
          //print("JS: RSingleApplication.installTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.installTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.installTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.removeTranslator = function() 
          
        {
          //print("JS: RSingleApplication.removeTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.removeTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.removeTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.quit = function() 
          
        {
          //print("JS: RSingleApplication.quit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.quit(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.quit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.sendSpontaneousEvent = function() 
          
        {
          //print("JS: RSingleApplication.sendSpontaneousEvent");
          
        };
      

        // static function 
        RSingleApplication.notifyInternal2 = function() 
          
        {
          //print("JS: RSingleApplication.notifyInternal2");
          
        };
      

        // static function 
        RSingleApplication.forwardEvent = function() 
          
        {
          //print("JS: RSingleApplication.forwardEvent");
          
        };
      

        // static function 
        RSingleApplication.libraryPathsLocked = function() 
          
        {
          //print("JS: RSingleApplication.libraryPathsLocked");
          
        };
      

        // static function 
        RSingleApplication.setApplicationDisplayName = function() 
          
        {
          //print("JS: RSingleApplication.setApplicationDisplayName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setApplicationDisplayName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setApplicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.applicationDisplayName = function() 
          
        {
          //print("JS: RSingleApplication.applicationDisplayName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.applicationDisplayName(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.applicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setDesktopFileName = function() 
          
        {
          //print("JS: RSingleApplication.setDesktopFileName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setDesktopFileName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setDesktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.desktopFileName = function() 
          
        {
          //print("JS: RSingleApplication.desktopFileName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.desktopFileName(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.desktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setWindowIcon = function() 
          
        {
          //print("JS: RSingleApplication.setWindowIcon");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setWindowIcon(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setWindowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.windowIcon = function() 
          
        {
          //print("JS: RSingleApplication.windowIcon");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.windowIcon(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.windowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.platformName = function() 
          
        {
          //print("JS: RSingleApplication.platformName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.platformName(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.platformName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.focusObject = function() 
          
        {
          //print("JS: RSingleApplication.focusObject");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.focusObject(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.focusObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.primaryScreen = function() 
          
        {
          //print("JS: RSingleApplication.primaryScreen");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.primaryScreen(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.primaryScreen(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.screens = function() 
          
        {
          //print("JS: RSingleApplication.screens");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.screens(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.screens(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.screenAt = function() 
          
        {
          //print("JS: RSingleApplication.screenAt");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.screenAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.screenAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.overrideCursor = function() 
          
        {
          //print("JS: RSingleApplication.overrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.overrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.overrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setOverrideCursor = function() 
          
        {
          //print("JS: RSingleApplication.setOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.changeOverrideCursor = function() 
          
        {
          //print("JS: RSingleApplication.changeOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.changeOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.changeOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.restoreOverrideCursor = function() 
          
        {
          //print("JS: RSingleApplication.restoreOverrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.restoreOverrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.restoreOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.clipboard = function() 
          
        {
          //print("JS: RSingleApplication.clipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.clipboard(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.clipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.keyboardModifiers = function() 
          
        {
          //print("JS: RSingleApplication.keyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.keyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.keyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.queryKeyboardModifiers = function() 
          
        {
          //print("JS: RSingleApplication.queryKeyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.queryKeyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.queryKeyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.mouseButtons = function() 
          
        {
          //print("JS: RSingleApplication.mouseButtons");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.mouseButtons(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.mouseButtons(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setLayoutDirection = function() 
          
        {
          //print("JS: RSingleApplication.setLayoutDirection");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setLayoutDirection(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setLayoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.layoutDirection = function() 
          
        {
          //print("JS: RSingleApplication.layoutDirection");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.layoutDirection(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.layoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.isRightToLeft = function() 
          
        {
          //print("JS: RSingleApplication.isRightToLeft");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.isRightToLeft(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.isRightToLeft(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.isLeftToRight = function() 
          
        {
          //print("JS: RSingleApplication.isLeftToRight");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.isLeftToRight(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.isLeftToRight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setDesktopSettingsAware = function() 
          
        {
          //print("JS: RSingleApplication.setDesktopSettingsAware");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setDesktopSettingsAware(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setDesktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.desktopSettingsAware = function() 
          
        {
          //print("JS: RSingleApplication.desktopSettingsAware");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.desktopSettingsAware(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.desktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setQuitOnLastWindowClosed = function() 
          
        {
          //print("JS: RSingleApplication.setQuitOnLastWindowClosed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setQuitOnLastWindowClosed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setQuitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.quitOnLastWindowClosed = function() 
          
        {
          //print("JS: RSingleApplication.quitOnLastWindowClosed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.quitOnLastWindowClosed(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.quitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.applicationState = function() 
          
        {
          //print("JS: RSingleApplication.applicationState");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.applicationState(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.applicationState(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.sync = function() 
          
        {
          //print("JS: RSingleApplication.sync");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.sync(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.sync(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.palette = function() 
          
        {
          //print("JS: RSingleApplication.palette");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.palette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.palette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.palette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setPalette = function() 
          
        {
          //print("JS: RSingleApplication.setPalette");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setPalette(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setPalette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.font = function() 
          
        {
          //print("JS: RSingleApplication.font");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.font(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.font(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.font(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.font(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setFont = function() 
          
        {
          //print("JS: RSingleApplication.setFont");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setFont(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.topLevelWidgets = function() 
          
        {
          //print("JS: RSingleApplication.topLevelWidgets");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.topLevelWidgets(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.topLevelWidgets(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.activePopupWidget = function() 
          
        {
          //print("JS: RSingleApplication.activePopupWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.activePopupWidget(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.activePopupWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.activeModalWidget = function() 
          
        {
          //print("JS: RSingleApplication.activeModalWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.activeModalWidget(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.activeModalWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.focusWidget = function() 
          
        {
          //print("JS: RSingleApplication.focusWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.focusWidget(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.focusWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.activeWindow = function() 
          
        {
          //print("JS: RSingleApplication.activeWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.activeWindow(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.activeWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.widgetAt = function() 
          
        {
          //print("JS: RSingleApplication.widgetAt");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.widgetAt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.widgetAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.widgetAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.topLevelAt = function() 
          
        {
          //print("JS: RSingleApplication.topLevelAt");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.topLevelAt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.topLevelAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.topLevelAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.beep = function() 
          
        {
          //print("JS: RSingleApplication.beep");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.beep(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.beep(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.alert = function() 
          
        {
          //print("JS: RSingleApplication.alert");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.alert(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.alert(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setCursorFlashTime = function() 
          
        {
          //print("JS: RSingleApplication.setCursorFlashTime");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setCursorFlashTime(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setCursorFlashTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.cursorFlashTime = function() 
          
        {
          //print("JS: RSingleApplication.cursorFlashTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.cursorFlashTime(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.cursorFlashTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setDoubleClickInterval = function() 
          
        {
          //print("JS: RSingleApplication.setDoubleClickInterval");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setDoubleClickInterval(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setDoubleClickInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.doubleClickInterval = function() 
          
        {
          //print("JS: RSingleApplication.doubleClickInterval");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.doubleClickInterval(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.doubleClickInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setKeyboardInputInterval = function() 
          
        {
          //print("JS: RSingleApplication.setKeyboardInputInterval");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setKeyboardInputInterval(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setKeyboardInputInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.keyboardInputInterval = function() 
          
        {
          //print("JS: RSingleApplication.keyboardInputInterval");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.keyboardInputInterval(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.keyboardInputInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setWheelScrollLines = function() 
          
        {
          //print("JS: RSingleApplication.setWheelScrollLines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setWheelScrollLines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setWheelScrollLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.wheelScrollLines = function() 
          
        {
          //print("JS: RSingleApplication.wheelScrollLines");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.wheelScrollLines(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.wheelScrollLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setStartDragTime = function() 
          
        {
          //print("JS: RSingleApplication.setStartDragTime");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setStartDragTime(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setStartDragTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.startDragTime = function() 
          
        {
          //print("JS: RSingleApplication.startDragTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.startDragTime(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.startDragTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.setStartDragDistance = function() 
          
        {
          //print("JS: RSingleApplication.setStartDragDistance");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.setStartDragDistance(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.setStartDragDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.startDragDistance = function() 
          
        {
          //print("JS: RSingleApplication.startDragDistance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.startDragDistance(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.startDragDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.exec = function() 
          
        {
          //print("JS: RSingleApplication.exec");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.exec(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.closeAllWindows = function() 
          
        {
          //print("JS: RSingleApplication.closeAllWindows");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.closeAllWindows(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.closeAllWindows(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.aboutQt = function() 
          
        {
          //print("JS: RSingleApplication.aboutQt");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.aboutQt(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.aboutQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSingleApplication.getInstance = function() 
          
        {
          //print("JS: RSingleApplication.getInstance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.getInstance(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.getInstance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSingleApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSingleApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    