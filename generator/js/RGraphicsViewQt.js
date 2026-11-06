
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewQt() {
        

        // should be RGraphicsViewQt_BaseJs.call(this, engine):
        //RGraphicsViewQt.prototype = new RGraphicsViewQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RGraphicsViewQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RGraphicsViewQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsViewQt);
  }

  
  else {
    
        print("RGraphicsViewQt(): wrong number / type of arguments");
      
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

      //RGraphicsViewQt.prototype = new RGraphicsViewQt_BaseJs(engine);
      //RGraphicsViewQt.prototype = new RGraphicsViewQt_Wrapper(engine);
      RGraphicsViewQt.prototype = new Object();


      RGraphicsViewQt.prototype.toString = function() {
          //return "RGraphicsViewQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewQt [JS]";
        };
      RGraphicsViewQt.getObjectType = function() {
        return RJSType_RGraphicsViewQt.getIdStatic();
      };

      RGraphicsViewQt.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewQt.getIdStatic();
      };

      RGraphicsViewQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGraphicsViewQt.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.findChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.children = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.property = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.parent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.devType = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isModal = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.window = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFont = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setMask = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mask = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.grab = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.update = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.repaint = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.show = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hide = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.close = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.raise = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.lower = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.move = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.resize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.windowState = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.layout = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setParent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.scroll = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.addAction = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.addActions = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.actions = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.windowType = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.childAt = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.event = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      RGraphicsViewQt.prototype.actionEvent = function() 
        
      {
        //print("JS: RGraphicsViewQt.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsViewQt);
  }

  
  else {
    
        print("RGraphicsViewQt.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RGraphicsViewQt.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.metric = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.redirected = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.create = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.destroy = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setImageView = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setImageView");
          
              return this.__PROXY__.setImageView(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.getImageView = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.getImageView");
          
              return this.__PROXY__.getImageView(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.disableGestures = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.disableGestures");
          
              return this.__PROXY__.disableGestures(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.removeFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.removeFocus");
          
              return this.__PROXY__.removeFocus(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.getRect = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.getRect");
          
              return this.__PROXY__.getRect(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.getSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.getSignalsBlocked");
          
              return this.__PROXY__.getSignalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setSignalsBlocked");
          
              return this.__PROXY__.setSignalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.setFocusFrameWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.setFocusFrameWidget");
          
              return this.__PROXY__.setFocusFrameWidget(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.simulateMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.simulateMouseMoveEvent");
          
              return this.__PROXY__.simulateMouseMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        RGraphicsViewQt.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewQt.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
      // function 
      RGraphicsViewQt.prototype.resizeEvent = function() 
        
      {
        //print("JS: RGraphicsViewQt.prototype.resizeEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.resizeEvent(
                // call highest level JS implementation:
                //return this.resizeEventBase(
                
                    return this.__PROXY__.resizeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RGraphicsViewQt);
  }

  
  else {
    
        print("RGraphicsViewQt.resizeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      
          Object.defineProperty(RGraphicsViewQt.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RGraphicsViewQt.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RGraphicsViewQt.prototype, 'drop', {
            get: function() { return this.__PROXY__.drop; },
            configurable: true
        });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'drop(QDropEvent*)', {
              get: function() { return this.__PROXY__.drop; },
              configurable: true
          });
        
        Object.defineProperty(RGraphicsViewQt.prototype, 'dragEnter', {
            get: function() { return this.__PROXY__.dragEnter; },
            configurable: true
        });
        
          Object.defineProperty(RGraphicsViewQt.prototype, 'dragEnter(QDragEnterEvent*)', {
              get: function() { return this.__PROXY__.dragEnter; },
              configurable: true
          });
        RGraphicsViewQt.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsViewQt.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsViewQt.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsViewQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsViewQt.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      