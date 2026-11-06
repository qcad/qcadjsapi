
      // auto generated
      //var self;

      // class constructor:
      function RCadToolBar() {
        

        // should be RCadToolBar_BaseJs.call(this, engine):
        //RCadToolBar.prototype = new RCadToolBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCadToolBar.getIdStatic()))) {

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
            qWarning("RCadToolBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RCadToolBar_Wrapper(
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

      

        //copyProperties(this, wrapper, RCadToolBar);
  }

  
  else {
    
        print("RCadToolBar(): wrong number / type of arguments");
      
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

      //RCadToolBar.prototype = new RCadToolBar_BaseJs(engine);
      //RCadToolBar.prototype = new RCadToolBar_Wrapper(engine);
      RCadToolBar.prototype = new Object();


      RCadToolBar.prototype.toString = function() {
          //return "RCadToolBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCadToolBar [JS]";
        };
      RCadToolBar.getObjectType = function() {
        return RJSType_RCadToolBar.getIdStatic();
      };

      RCadToolBar.prototype.getObjectType = function() {
        return RJSType_RCadToolBar.getIdStatic();
      };

      RCadToolBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCadToolBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QToolBar.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RCadToolBar.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        RCadToolBar.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.children = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.property = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.parent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.devType = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.window = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mask = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.grab = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.update = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.show = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hide = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.close = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.raise = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.lower = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.move = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.resize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.layout = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.actions = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.event = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        RCadToolBar.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        RCadToolBar.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      RCadToolBar.prototype.actionEvent = function() 
        
      {
        //print("JS: RCadToolBar.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCadToolBar);
  }

  
  else {
    
        print("RCadToolBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RCadToolBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.metric = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.create = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setMovable = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setMovable");
          
              return this.__PROXY__.setMovable(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isMovable = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isMovable");
          
              return this.__PROXY__.isMovable(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setAllowedAreas = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setAllowedAreas");
          
              return this.__PROXY__.setAllowedAreas(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isAreaAllowed = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isAreaAllowed");
          
              return this.__PROXY__.isAreaAllowed(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.clear = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.addSeparator = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.addSeparator");
          
              return this.__PROXY__.addSeparator(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.addWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.actionGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.actionGeometry");
          
              return this.__PROXY__.actionGeometry(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.actionAt = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.actionAt");
          
              return this.__PROXY__.actionAt(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.toggleViewAction = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.toggleViewAction");
          
              return this.__PROXY__.toggleViewAction(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.widgetForAction = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.widgetForAction");
          
              return this.__PROXY__.widgetForAction(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isFloatable = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isFloatable");
          
              return this.__PROXY__.isFloatable(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setFloatable = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setFloatable");
          
              return this.__PROXY__.setFloatable(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.isFloating = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.isFloating");
          
              return this.__PROXY__.isFloating(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        RCadToolBar.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        RCadToolBar.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        RCadToolBar.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        RCadToolBar.prototype.getPanel = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.getPanel");
          
              return this.__PROXY__.getPanel(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.getCurrentPanelName = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.getCurrentPanelName");
          
              return this.__PROXY__.getCurrentPanelName(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.getCurrentPanel = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.getCurrentPanel");
          
              return this.__PROXY__.getCurrentPanel(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.showPanel = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.showPanel");
          
              return this.__PROXY__.showPanel(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.updateIconSize = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.updateIconSize");
          
              return this.__PROXY__.updateIconSize(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.back = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.back");
          
              return this.__PROXY__.back(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.toggleVerticalWhenFloating = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.toggleVerticalWhenFloating");
          
              return this.__PROXY__.toggleVerticalWhenFloating(...args);
            
        };
        
        // function 
        RCadToolBar.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RCadToolBar.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
        RCadToolBar.prototype.contextMenuEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(RCadToolBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'allowedAreas', {
              get: function() {
                  
                      return this.__PROXY__.allowedAreas;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllowedAreas(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'floatable', {
              get: function() {
                  
                      return this.__PROXY__.isFloatable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFloatable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'movable', {
              get: function() {
                  
                      return this.__PROXY__.isMovable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBar.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'actionTriggered', {
            get: function() { return this.__PROXY__.actionTriggered; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'actionTriggered(QAction*)', {
              get: function() { return this.__PROXY__.actionTriggered; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'movableChanged', {
            get: function() { return this.__PROXY__.movableChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'movableChanged(bool)', {
              get: function() { return this.__PROXY__.movableChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'allowedAreasChanged', {
            get: function() { return this.__PROXY__.allowedAreasChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'allowedAreasChanged(Qt::ToolBarAreas)', {
              get: function() { return this.__PROXY__.allowedAreasChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'orientationChanged', {
            get: function() { return this.__PROXY__.orientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'orientationChanged(Qt::Orientation)', {
              get: function() { return this.__PROXY__.orientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'toolButtonStyleChanged', {
            get: function() { return this.__PROXY__.toolButtonStyleChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'toolButtonStyleChanged(Qt::ToolButtonStyle)', {
              get: function() { return this.__PROXY__.toolButtonStyleChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'topLevelChanged', {
            get: function() { return this.__PROXY__.topLevelChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'topLevelChanged(bool)', {
              get: function() { return this.__PROXY__.topLevelChanged; },
              configurable: true
          });
        
        Object.defineProperty(RCadToolBar.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBar.prototype, 'visibilityChanged(bool)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        RCadToolBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCadToolBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCadToolBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCadToolBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCadToolBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCadToolBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      