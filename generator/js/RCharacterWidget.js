
      // auto generated
      //var self;

      // class constructor:
      function RCharacterWidget() {
        

        // should be RCharacterWidget_BaseJs.call(this, engine):
        //RCharacterWidget.prototype = new RCharacterWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCharacterWidget.getIdStatic()))) {

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
            qWarning("RCharacterWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RCharacterWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCharacterWidget);
  }

  
  else {
    
        print("RCharacterWidget(): wrong number / type of arguments");
      
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

      //RCharacterWidget.prototype = new RCharacterWidget_BaseJs(engine);
      //RCharacterWidget.prototype = new RCharacterWidget_Wrapper(engine);
      RCharacterWidget.prototype = new Object();


      RCharacterWidget.prototype.toString = function() {
          //return "RCharacterWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCharacterWidget [JS]";
        };
      RCharacterWidget.getObjectType = function() {
        return RJSType_RCharacterWidget.getIdStatic();
      };

      RCharacterWidget.prototype.getObjectType = function() {
        return RJSType_RCharacterWidget.getIdStatic();
      };

      RCharacterWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCharacterWidget.getIdStatic()) {
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
        RCharacterWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        RCharacterWidget.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        RCharacterWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        RCharacterWidget.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        RCharacterWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        RCharacterWidget.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        RCharacterWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      RCharacterWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: RCharacterWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCharacterWidget);
  }

  
  else {
    
        print("RCharacterWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RCharacterWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.getDisplayFont = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.getDisplayFont");
          
              return this.__PROXY__.getDisplayFont(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateFont = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateFont");
          
              return this.__PROXY__.updateFont(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateSize = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateSize");
          
              return this.__PROXY__.updateSize(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateStyle = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateStyle");
          
              return this.__PROXY__.updateStyle(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.updateFontMerging = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.updateFontMerging");
          
              return this.__PROXY__.updateFontMerging(...args);
            
        };
        
        // function 
        RCharacterWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        RCharacterWidget.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        RCharacterWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        RCharacterWidget.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        RCharacterWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RCharacterWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        RCharacterWidget.prototype.paintEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(RCharacterWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCharacterWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RCharacterWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RCharacterWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RCharacterWidget.prototype, 'characterSelected', {
            get: function() { return this.__PROXY__.characterSelected; },
            configurable: true
        });
        
          Object.defineProperty(RCharacterWidget.prototype, 'characterSelected(QString)', {
              get: function() { return this.__PROXY__.characterSelected; },
              configurable: true
          });
        RCharacterWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCharacterWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCharacterWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCharacterWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCharacterWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCharacterWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      