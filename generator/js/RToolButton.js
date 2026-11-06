
      // auto generated
      //var self;

      // class constructor:
      function RToolButton() {
        

        // should be RToolButton_BaseJs.call(this, engine):
        //RToolButton.prototype = new RToolButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToolButton.getIdStatic()))) {

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
            qWarning("RToolButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RToolButton_Wrapper(
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

      

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton(): wrong number / type of arguments");
      
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

      //RToolButton.prototype = new RToolButton_BaseJs(engine);
      //RToolButton.prototype = new RToolButton_Wrapper(engine);
      RToolButton.prototype = new Object();


      RToolButton.prototype.toString = function() {
          //return "RToolButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToolButton [JS]";
        };
      RToolButton.getObjectType = function() {
        return RJSType_RToolButton.getIdStatic();
      };

      RToolButton.prototype.getObjectType = function() {
        return RJSType_RToolButton.getIdStatic();
      };

      RToolButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToolButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QToolButton.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RToolButton.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RToolButton.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RToolButton.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RToolButton.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RToolButton.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RToolButton.prototype.findChild = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RToolButton.prototype.children = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RToolButton.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RToolButton.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RToolButton.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RToolButton.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RToolButton.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RToolButton.prototype.property = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RToolButton.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RToolButton.prototype.parent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RToolButton.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RToolButton.prototype.devType = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RToolButton.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RToolButton.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RToolButton.prototype.isModal = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RToolButton.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RToolButton.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RToolButton.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RToolButton.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RToolButton.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RToolButton.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RToolButton.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RToolButton.prototype.window = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RToolButton.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RToolButton.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RToolButton.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RToolButton.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFont = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RToolButton.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RToolButton.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RToolButton.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RToolButton.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RToolButton.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RToolButton.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RToolButton.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMask = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RToolButton.prototype.mask = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RToolButton.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RToolButton.prototype.grab = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RToolButton.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RToolButton.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RToolButton.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RToolButton.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RToolButton.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RToolButton.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RToolButton.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RToolButton.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RToolButton.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RToolButton.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RToolButton.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RToolButton.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RToolButton.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RToolButton.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RToolButton.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RToolButton.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RToolButton.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RToolButton.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RToolButton.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RToolButton.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RToolButton.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RToolButton.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RToolButton.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RToolButton.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RToolButton.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RToolButton.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RToolButton.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RToolButton.prototype.update = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RToolButton.prototype.repaint = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RToolButton.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RToolButton.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RToolButton.prototype.show = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RToolButton.prototype.hide = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RToolButton.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RToolButton.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RToolButton.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RToolButton.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RToolButton.prototype.close = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RToolButton.prototype.raise = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RToolButton.prototype.lower = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RToolButton.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RToolButton.prototype.move = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RToolButton.prototype.resize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RToolButton.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RToolButton.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RToolButton.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RToolButton.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RToolButton.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RToolButton.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RToolButton.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RToolButton.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RToolButton.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RToolButton.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RToolButton.prototype.windowState = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RToolButton.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RToolButton.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RToolButton.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RToolButton.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RToolButton.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RToolButton.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RToolButton.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RToolButton.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RToolButton.prototype.layout = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RToolButton.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RToolButton.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RToolButton.prototype.setParent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RToolButton.prototype.scroll = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RToolButton.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RToolButton.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RToolButton.prototype.addAction = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RToolButton.prototype.addActions = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RToolButton.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RToolButton.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RToolButton.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RToolButton.prototype.actions = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RToolButton.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RToolButton.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RToolButton.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RToolButton.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RToolButton.prototype.windowType = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RToolButton.prototype.childAt = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RToolButton.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RToolButton.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RToolButton.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RToolButton.prototype.event = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RToolButton.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.metric = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RToolButton.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RToolButton.prototype.redirected = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RToolButton.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RToolButton.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RToolButton.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RToolButton.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RToolButton.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RToolButton.prototype.create = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RToolButton.prototype.destroy = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RToolButton.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RToolButton.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RToolButton.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RToolButton.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RToolButton.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RToolButton.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RToolButton.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RToolButton.prototype.setArrowType = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setArrowType");
          
              return this.__PROXY__.setArrowType(...args);
            
        };
    
        // function 
        RToolButton.prototype.setMenu = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
    
        // function 
        RToolButton.prototype.menu = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
    
        // function 
        RToolButton.prototype.setPopupMode = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setPopupMode");
          
              return this.__PROXY__.setPopupMode(...args);
            
        };
    
        // function 
        RToolButton.prototype.defaultAction = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.defaultAction");
          
              return this.__PROXY__.defaultAction(...args);
            
        };
    
        // function 
        RToolButton.prototype.setAutoRaise = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setAutoRaise");
          
              return this.__PROXY__.setAutoRaise(...args);
            
        };
    
        // function 
        RToolButton.prototype.showMenu = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.showMenu");
          
              return this.__PROXY__.showMenu(...args);
            
        };
    
        // function 
        RToolButton.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
    
        // function 
        RToolButton.prototype.setDefaultAction = function(...args) 
          
        {
          //print("JS: RToolButton.prototype.setDefaultAction");
          
              return this.__PROXY__.setDefaultAction(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RToolButton.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'autoRaise', {
              get: function() {
                  
                      return this.__PROXY__.autoRaise;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRaise(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'arrowType', {
              get: function() {
                  
                      return this.__PROXY__.arrowType;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setArrowType(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RToolButton.prototype, 'popupMode', {
              get: function() {
                  
                      return this.__PROXY__.popupMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPopupMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RToolButton.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RToolButton.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RToolButton.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(RToolButton.prototype, 'triggered(QAction*)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        RToolButton.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RToolButton.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RToolButton.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RToolButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToolButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RToolButton.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      