
      // auto generated
      //var self;

      // class constructor:
      function RMdiChildQt() {
        

        // should be RMdiChildQt_BaseJs.call(this, engine):
        //RMdiChildQt.prototype = new RMdiChildQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMdiChildQt.getIdStatic()))) {

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
            qWarning("RMdiChildQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMdiChildQt_Wrapper(
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

      

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt(): wrong number / type of arguments");
      
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

      //RMdiChildQt.prototype = new RMdiChildQt_BaseJs(engine);
      //RMdiChildQt.prototype = new RMdiChildQt_Wrapper(engine);
      RMdiChildQt.prototype = new Object();


      RMdiChildQt.prototype.toString = function() {
          //return "RMdiChildQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMdiChildQt [JS]";
        };
      RMdiChildQt.getObjectType = function() {
        return RJSType_RMdiChildQt.getIdStatic();
      };

      RMdiChildQt.prototype.getObjectType = function() {
        return RJSType_RMdiChildQt.getIdStatic();
      };

      RMdiChildQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMdiChildQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RModifiedListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMdiSubWindow.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RMdiChildQt.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.findChild = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.children = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.property = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.parent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.devType = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isModal = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.window = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFont = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setMask = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mask = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.grab = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.update = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.repaint = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.show = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hide = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.close = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.raise = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.lower = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.move = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.resize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.windowState = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.layout = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setParent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.scroll = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.addAction = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.addActions = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.actions = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.windowType = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.childAt = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.event = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.metric = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.redirected = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.create = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.destroy = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.widget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.maximizedButtonsWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.maximizedButtonsWidget");
          
              return this.__PROXY__.maximizedButtonsWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.maximizedSystemMenuIconWidget = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.maximizedSystemMenuIconWidget");
          
              return this.__PROXY__.maximizedSystemMenuIconWidget(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isShaded = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isShaded");
          
              return this.__PROXY__.isShaded(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setOption = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.testOption = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setKeyboardSingleStep = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setKeyboardSingleStep");
          
              return this.__PROXY__.setKeyboardSingleStep(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.keyboardSingleStep = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.keyboardSingleStep");
          
              return this.__PROXY__.keyboardSingleStep(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setKeyboardPageStep = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setKeyboardPageStep");
          
              return this.__PROXY__.setKeyboardPageStep(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.keyboardPageStep = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.keyboardPageStep");
          
              return this.__PROXY__.keyboardPageStep(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setSystemMenu = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setSystemMenu");
          
              return this.__PROXY__.setSystemMenu(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.systemMenu = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.systemMenu");
          
              return this.__PROXY__.systemMenu(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.mdiArea = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mdiArea");
          
              return this.__PROXY__.mdiArea(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showSystemMenu = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showSystemMenu");
          
              return this.__PROXY__.showSystemMenu(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.showShaded = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.showShaded");
          
              return this.__PROXY__.showShaded(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setDocumentInterface = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setDocumentInterface");
          
              return this.__PROXY__.setDocumentInterface(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.getLastKnownViewWithFocus = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.getLastKnownViewWithFocus");
          
              return this.__PROXY__.getLastKnownViewWithFocus(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.updateModifiedListener = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.updateModifiedListener");
          
              return this.__PROXY__.updateModifiedListener(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setCloseEventRejected = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setCloseEventRejected");
          
              return this.__PROXY__.setCloseEventRejected(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.setCloseEventAccepted = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.setCloseEventAccepted");
          
              return this.__PROXY__.setCloseEventAccepted(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.isCloseEventAccepted = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.isCloseEventAccepted");
          
              return this.__PROXY__.isCloseEventAccepted(...args);
            
        };
        
        // function 
        RMdiChildQt.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        RMdiChildQt.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        RMdiChildQt.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        RMdiChildQt.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        RMdiChildQt.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RMdiChildQt.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        RMdiChildQt.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(RMdiChildQt.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiChildQt.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RMdiChildQt.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMdiChildQt.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMdiChildQt.prototype, 'windowStateChanged', {
            get: function() { return this.__PROXY__.windowStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMdiChildQt.prototype, 'windowStateChanged(Qt::WindowStates,Qt::WindowStates)', {
              get: function() { return this.__PROXY__.windowStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMdiChildQt.prototype, 'aboutToActivate', {
            get: function() { return this.__PROXY__.aboutToActivate; },
            configurable: true
        });
        
        Object.defineProperty(RMdiChildQt.prototype, 'closeRequested', {
            get: function() { return this.__PROXY__.closeRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMdiChildQt.prototype, 'closeRequested(RMdiChildQt*)', {
              get: function() { return this.__PROXY__.closeRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMdiChildQt.prototype, 'closeAccepted', {
            get: function() { return this.__PROXY__.closeAccepted; },
            configurable: true
        });
        
          Object.defineProperty(RMdiChildQt.prototype, 'closeAccepted(RMdiChildQt*)', {
              get: function() { return this.__PROXY__.closeAccepted; },
              configurable: true
          });
        
        Object.defineProperty(RMdiChildQt.prototype, 'modifiedStatusChanged', {
            get: function() { return this.__PROXY__.modifiedStatusChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMdiChildQt.prototype, 'modifiedStatusChanged(RMdiChildQt*)', {
              get: function() { return this.__PROXY__.modifiedStatusChanged; },
              configurable: true
          });
        RMdiChildQt.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMdiChildQt.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMdiChildQt.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMdiChildQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMdiChildQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMdiChildQt.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      