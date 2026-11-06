
      // auto generated
      //var self;

      // class constructor:
      function RCommandLine() {
        

        // should be RCommandLine_BaseJs.call(this, engine):
        //RCommandLine.prototype = new RCommandLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCommandLine.getIdStatic()))) {

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
            qWarning("RCommandLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RCommandLine_Wrapper(
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

      

        //copyProperties(this, wrapper, RCommandLine);
  }

  
  else {
    
        print("RCommandLine(): wrong number / type of arguments");
      
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

      //RCommandLine.prototype = new RCommandLine_BaseJs(engine);
      //RCommandLine.prototype = new RCommandLine_Wrapper(engine);
      RCommandLine.prototype = new Object();


      RCommandLine.prototype.toString = function() {
          //return "RCommandLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCommandLine [JS]";
        };
      RCommandLine.getObjectType = function() {
        return RJSType_RCommandLine.getIdStatic();
      };

      RCommandLine.prototype.getObjectType = function() {
        return RJSType_RCommandLine.getIdStatic();
      };

      RCommandLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCommandLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLineEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ActionPosition
RCommandLine.LeadingPosition = RCommandLine_Wrapper.LeadingPosition;
RCommandLine.TrailingPosition = RCommandLine_Wrapper.TrailingPosition;

  // enum: EchoMode
RCommandLine.Normal = RCommandLine_Wrapper.Normal;
RCommandLine.NoEcho = RCommandLine_Wrapper.NoEcho;
RCommandLine.Password = RCommandLine_Wrapper.Password;
RCommandLine.PasswordEchoOnEdit = RCommandLine_Wrapper.PasswordEchoOnEdit;


      // functions:
      
        // function 
        RCommandLine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RCommandLine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RCommandLine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RCommandLine.prototype.findChild = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RCommandLine.prototype.children = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RCommandLine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RCommandLine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RCommandLine.prototype.property = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RCommandLine.prototype.parent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RCommandLine.prototype.devType = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RCommandLine.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isModal = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RCommandLine.prototype.window = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RCommandLine.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RCommandLine.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFont = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RCommandLine.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RCommandLine.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RCommandLine.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMask = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mask = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RCommandLine.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RCommandLine.prototype.grab = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RCommandLine.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RCommandLine.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RCommandLine.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RCommandLine.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RCommandLine.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RCommandLine.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RCommandLine.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RCommandLine.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RCommandLine.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RCommandLine.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RCommandLine.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.update = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RCommandLine.prototype.repaint = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RCommandLine.prototype.show = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hide = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RCommandLine.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RCommandLine.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RCommandLine.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RCommandLine.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RCommandLine.prototype.close = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RCommandLine.prototype.raise = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RCommandLine.prototype.lower = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RCommandLine.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RCommandLine.prototype.move = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RCommandLine.prototype.resize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RCommandLine.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RCommandLine.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RCommandLine.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RCommandLine.prototype.windowState = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RCommandLine.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RCommandLine.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RCommandLine.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RCommandLine.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RCommandLine.prototype.layout = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RCommandLine.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setParent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.scroll = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RCommandLine.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RCommandLine.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RCommandLine.prototype.addActions = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RCommandLine.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RCommandLine.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RCommandLine.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RCommandLine.prototype.actions = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RCommandLine.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RCommandLine.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RCommandLine.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RCommandLine.prototype.windowType = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RCommandLine.prototype.childAt = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RCommandLine.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RCommandLine.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RCommandLine.prototype.event = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RCommandLine.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.metric = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RCommandLine.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RCommandLine.prototype.redirected = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RCommandLine.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RCommandLine.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RCommandLine.prototype.create = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RCommandLine.prototype.destroy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RCommandLine.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RCommandLine.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RCommandLine.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RCommandLine.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RCommandLine.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setMaxLength = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setMaxLength");
          
              return this.__PROXY__.setMaxLength(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setClearButtonEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setClearButtonEnabled");
          
              return this.__PROXY__.setClearButtonEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isClearButtonEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isClearButtonEnabled");
          
              return this.__PROXY__.isClearButtonEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setEchoMode = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setEchoMode");
          
              return this.__PROXY__.setEchoMode(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RCommandLine.prototype.completer = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setCursorPosition = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setCursorPosition");
          
              return this.__PROXY__.setCursorPosition(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorPositionAt = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorPositionAt");
          
              return this.__PROXY__.cursorPositionAt(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorForward = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorForward");
          
              return this.__PROXY__.cursorForward(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorBackward = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorBackward");
          
              return this.__PROXY__.cursorBackward(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorWordForward = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorWordForward");
          
              return this.__PROXY__.cursorWordForward(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorWordBackward = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorWordBackward");
          
              return this.__PROXY__.cursorWordBackward(...args);
            
        };
    
        // function 
        RCommandLine.prototype.backspace = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.backspace");
          
              return this.__PROXY__.backspace(...args);
            
        };
    
        // function 
        RCommandLine.prototype.del = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.del");
          
              return this.__PROXY__.del(...args);
            
        };
    
        // function 
        RCommandLine.prototype.home = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.home");
          
              return this.__PROXY__.home(...args);
            
        };
    
        // function 
        RCommandLine.prototype.end = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.end");
          
              return this.__PROXY__.end(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isModified = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setModified = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setSelection = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
    
        // function 
        RCommandLine.prototype.selectionStart = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.selectionStart");
          
              return this.__PROXY__.selectionStart(...args);
            
        };
    
        // function 
        RCommandLine.prototype.selectionEnd = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.selectionEnd");
          
              return this.__PROXY__.selectionEnd(...args);
            
        };
    
        // function 
        RCommandLine.prototype.selectionLength = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.selectionLength");
          
              return this.__PROXY__.selectionLength(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isUndoAvailable = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isUndoAvailable");
          
              return this.__PROXY__.isUndoAvailable(...args);
            
        };
    
        // function 
        RCommandLine.prototype.isRedoAvailable = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.isRedoAvailable");
          
              return this.__PROXY__.isRedoAvailable(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setCursorMoveStyle = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setCursorMoveStyle");
          
              return this.__PROXY__.setCursorMoveStyle(...args);
            
        };
    
        // function 
        RCommandLine.prototype.inputMask = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.inputMask");
          
              return this.__PROXY__.inputMask(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setInputMask = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setInputMask");
          
              return this.__PROXY__.setInputMask(...args);
            
        };
    
        // function 
        RCommandLine.prototype.hasAcceptableInput = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.hasAcceptableInput");
          
              return this.__PROXY__.hasAcceptableInput(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setTextMargins = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setTextMargins");
          
              return this.__PROXY__.setTextMargins(...args);
            
        };
    
        // function 
        RCommandLine.prototype.textMargins = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.textMargins");
          
              return this.__PROXY__.textMargins(...args);
            
        };
    
        // function 
        RCommandLine.prototype.addAction = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setText = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RCommandLine.prototype.clear = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RCommandLine.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        RCommandLine.prototype.undo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.redo = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cut = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
    
        // function 
        RCommandLine.prototype.copy = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        RCommandLine.prototype.deselect = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.deselect");
          
              return this.__PROXY__.deselect(...args);
            
        };
    
        // function 
        RCommandLine.prototype.insert = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.insert");
          
              return this.__PROXY__.insert(...args);
            
        };
    
        // function 
        RCommandLine.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RCommandLine.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RCommandLine.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RCommandLine.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
    
        // function 
        RCommandLine.prototype.getLastCommand = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.getLastCommand");
          
              return this.__PROXY__.getLastCommand(...args);
            
        };
    
        // function 
        RCommandLine.prototype.appendCommand = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.appendCommand");
          
              return this.__PROXY__.appendCommand(...args);
            
        };
    
        // function 
        RCommandLine.prototype.getHistory = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.getHistory");
          
              return this.__PROXY__.getHistory(...args);
            
        };
    
        // function 
        RCommandLine.prototype.setHistory = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.setHistory");
          
              return this.__PROXY__.setHistory(...args);
            
        };
    
        // function 
        RCommandLine.prototype.triggerCommand = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.triggerCommand");
          
              return this.__PROXY__.triggerCommand(...args);
            
        };
    
        // function 
        RCommandLine.prototype.paste = function(...args) 
          
        {
          //print("JS: RCommandLine.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RCommandLine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'maxLength', {
              get: function() {
                  
                      return this.__PROXY__.maxLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'echoMode', {
              get: function() {
                  
                      return this.__PROXY__.echoMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEchoMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'displayText', {
              get: function() {
                  
                      return this.__PROXY__.displayText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'cursorPosition', {
              get: function() {
                  
                      return this.__PROXY__.cursorPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'modified', {
              get: function() {
                  
                      return this.__PROXY__.isModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'hasSelectedText', {
              get: function() {
                  
                      return this.__PROXY__.hasSelectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'selectedText', {
              get: function() {
                  
                      return this.__PROXY__.selectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'undoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isUndoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'redoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isRedoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'acceptableInput', {
              get: function() {
                  
                      return this.__PROXY__.hasAcceptableInput();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'cursorMoveStyle', {
              get: function() {
                  
                      return this.__PROXY__.cursorMoveStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorMoveStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCommandLine.prototype, 'clearButtonEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isClearButtonEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setClearButtonEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'textChanged(QString)', {
              get: function() { return this.__PROXY__.textChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'textEdited', {
            get: function() { return this.__PROXY__.textEdited; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'textEdited(QString)', {
              get: function() { return this.__PROXY__.textEdited; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'cursorPositionChanged(int,int)', {
              get: function() { return this.__PROXY__.cursorPositionChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'returnPressed', {
            get: function() { return this.__PROXY__.returnPressed; },
            configurable: true
        });
        
        Object.defineProperty(RCommandLine.prototype, 'editingFinished', {
            get: function() { return this.__PROXY__.editingFinished; },
            configurable: true
        });
        
        Object.defineProperty(RCommandLine.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RCommandLine.prototype, 'inputRejected', {
            get: function() { return this.__PROXY__.inputRejected; },
            configurable: true
        });
        
        Object.defineProperty(RCommandLine.prototype, 'clearHistory', {
            get: function() { return this.__PROXY__.clearHistory; },
            configurable: true
        });
        
        Object.defineProperty(RCommandLine.prototype, 'commandConfirmed', {
            get: function() { return this.__PROXY__.commandConfirmed; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'commandConfirmed(QString)', {
              get: function() { return this.__PROXY__.commandConfirmed; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'completeCommand', {
            get: function() { return this.__PROXY__.completeCommand; },
            configurable: true
        });
        
          Object.defineProperty(RCommandLine.prototype, 'completeCommand(QString)', {
              get: function() { return this.__PROXY__.completeCommand; },
              configurable: true
          });
        
        Object.defineProperty(RCommandLine.prototype, 'escape', {
            get: function() { return this.__PROXY__.escape; },
            configurable: true
        });
        RCommandLine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCommandLine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCommandLine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCommandLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCommandLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCommandLine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      