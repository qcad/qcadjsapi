
      // auto generated
      //var self;

      // class constructor:
      function RMainWindowQt() {
        

        // should be RMainWindowQt_BaseJs.call(this, engine):
        //RMainWindowQt.prototype = new RMainWindowQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMainWindowQt.getIdStatic()))) {

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
            qWarning("RMainWindowQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RMainWindowQt_Wrapper(
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

      

        //copyProperties(this, wrapper, RMainWindowQt);
  }

  
  else {
    
        print("RMainWindowQt(): wrong number / type of arguments");
      
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

      //RMainWindowQt.prototype = new RMainWindowQt_BaseJs(engine);
      //RMainWindowQt.prototype = new RMainWindowQt_Wrapper(engine);
      RMainWindowQt.prototype = new Object();


      RMainWindowQt.prototype.toString = function() {
          //return "RMainWindowQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMainWindowQt [JS]";
        };
      RMainWindowQt.getObjectType = function() {
        return RJSType_RMainWindowQt.getIdStatic();
      };

      RMainWindowQt.prototype.getObjectType = function() {
        return RJSType_RMainWindowQt.getIdStatic();
      };

      RMainWindowQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMainWindowQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RMainWindow.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMainWindow.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DockOption
RMainWindowQt.AnimatedDocks = RMainWindowQt_Wrapper.AnimatedDocks;
RMainWindowQt.AllowNestedDocks = RMainWindowQt_Wrapper.AllowNestedDocks;
RMainWindowQt.AllowTabbedDocks = RMainWindowQt_Wrapper.AllowTabbedDocks;
RMainWindowQt.ForceTabbedDocks = RMainWindowQt_Wrapper.ForceTabbedDocks;
RMainWindowQt.VerticalTabs = RMainWindowQt_Wrapper.VerticalTabs;
RMainWindowQt.GroupedDragging = RMainWindowQt_Wrapper.GroupedDragging;


      // functions:
      
        // function 
        RMainWindowQt.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.findChild = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.children = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.property = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.parent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.devType = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isModal = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.window = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFont = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMask = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mask = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.grab = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.update = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.repaint = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.show = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hide = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.close = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.raise = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.lower = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.windowState = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.layout = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setParent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.scroll = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addAction = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addActions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.actions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.windowType = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.childAt = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.metric = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.redirected = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.create = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.destroy = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyListeners");
          
              return this.__PROXY__.notifyListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addCoordinateListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addCoordinateListener");
          
              return this.__PROXY__.addCoordinateListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeCoordinateListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeCoordinateListener");
          
              return this.__PROXY__.removeCoordinateListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyCoordinateListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyCoordinateListeners");
          
              return this.__PROXY__.notifyCoordinateListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addSelectionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addSelectionListener");
          
              return this.__PROXY__.addSelectionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeSelectionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeSelectionListener");
          
              return this.__PROXY__.removeSelectionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifySelectionListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifySelectionListeners");
          
              return this.__PROXY__.notifySelectionListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addPropertyListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addPropertyListener");
          
              return this.__PROXY__.addPropertyListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removePropertyListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removePropertyListener");
          
              return this.__PROXY__.removePropertyListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyPropertyListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyPropertyListeners");
          
              return this.__PROXY__.notifyPropertyListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addExportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addExportListener");
          
              return this.__PROXY__.addExportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.prependExportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.prependExportListener");
          
              return this.__PROXY__.prependExportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeExportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeExportListener");
          
              return this.__PROXY__.removeExportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyExportListenersPre = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyExportListenersPre");
          
              return this.__PROXY__.notifyExportListenersPre(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyExportListenersPost = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyExportListenersPost");
          
              return this.__PROXY__.notifyExportListenersPost(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyExportListenersEnd = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyExportListenersEnd");
          
              return this.__PROXY__.notifyExportListenersEnd(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addEntityExportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addEntityExportListener");
          
              return this.__PROXY__.addEntityExportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeEntityExportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeEntityExportListener");
          
              return this.__PROXY__.removeEntityExportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyEntityExportListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyEntityExportListeners");
          
              return this.__PROXY__.notifyEntityExportListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addImportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addImportListener");
          
              return this.__PROXY__.addImportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeImportListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeImportListener");
          
              return this.__PROXY__.removeImportListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyImportListenersPre = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyImportListenersPre");
          
              return this.__PROXY__.notifyImportListenersPre(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyImportListenersPost = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyImportListenersPost");
          
              return this.__PROXY__.notifyImportListenersPost(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addTransactionListener");
          
              return this.__PROXY__.addTransactionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeTransactionListener");
          
              return this.__PROXY__.removeTransactionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyTransactionListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyTransactionListeners");
          
              return this.__PROXY__.notifyTransactionListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addInterTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addInterTransactionListener");
          
              return this.__PROXY__.addInterTransactionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeInterTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeInterTransactionListener");
          
              return this.__PROXY__.removeInterTransactionListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyInterTransactionListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyInterTransactionListeners");
          
              return this.__PROXY__.notifyInterTransactionListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addNewDocumentListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addNewDocumentListener");
          
              return this.__PROXY__.addNewDocumentListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeNewDocumentListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeNewDocumentListener");
          
              return this.__PROXY__.removeNewDocumentListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyNewDocumentListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyNewDocumentListeners");
          
              return this.__PROXY__.notifyNewDocumentListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addSnapListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addSnapListener");
          
              return this.__PROXY__.addSnapListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeSnapListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeSnapListener");
          
              return this.__PROXY__.removeSnapListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifySnapListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifySnapListeners");
          
              return this.__PROXY__.notifySnapListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addFocusListener");
          
              return this.__PROXY__.addFocusListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeFocusListener");
          
              return this.__PROXY__.removeFocusListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyFocusListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyFocusListeners");
          
              return this.__PROXY__.notifyFocusListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addKeyListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addKeyListener");
          
              return this.__PROXY__.addKeyListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeKeyListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeKeyListener");
          
              return this.__PROXY__.removeKeyListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyKeyListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyKeyListeners");
          
              return this.__PROXY__.notifyKeyListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addViewFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addViewFocusListener");
          
              return this.__PROXY__.addViewFocusListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeViewFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeViewFocusListener");
          
              return this.__PROXY__.removeViewFocusListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyViewFocusListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyViewFocusListeners");
          
              return this.__PROXY__.notifyViewFocusListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addPreferencesListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addPreferencesListener");
          
              return this.__PROXY__.addPreferencesListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removePreferencesListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removePreferencesListener");
          
              return this.__PROXY__.removePreferencesListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyPreferencesListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyPreferencesListeners");
          
              return this.__PROXY__.notifyPreferencesListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.propertyChangeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.propertyChangeEvent");
          
              return this.__PROXY__.propertyChangeEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addUcsListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addUcsListener");
          
              return this.__PROXY__.addUcsListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeUcsListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeUcsListener");
          
              return this.__PROXY__.removeUcsListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyUcsListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyUcsListeners");
          
              return this.__PROXY__.notifyUcsListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addLayerListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addLayerListener");
          
              return this.__PROXY__.addLayerListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeLayerListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeLayerListener");
          
              return this.__PROXY__.removeLayerListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyLayerListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyLayerListeners");
          
              return this.__PROXY__.notifyLayerListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyLayerListenersCurrentLayer = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyLayerListenersCurrentLayer");
          
              return this.__PROXY__.notifyLayerListenersCurrentLayer(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addBlockListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addBlockListener");
          
              return this.__PROXY__.addBlockListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeBlockListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeBlockListener");
          
              return this.__PROXY__.removeBlockListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyBlockListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyBlockListeners");
          
              return this.__PROXY__.notifyBlockListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyBlockListenersCurrentBlock = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyBlockListenersCurrentBlock");
          
              return this.__PROXY__.notifyBlockListenersCurrentBlock(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addViewListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addViewListener");
          
              return this.__PROXY__.addViewListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeViewListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeViewListener");
          
              return this.__PROXY__.removeViewListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyViewListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyViewListeners");
          
              return this.__PROXY__.notifyViewListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addPenListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addPenListener");
          
              return this.__PROXY__.addPenListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removePenListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removePenListener");
          
              return this.__PROXY__.removePenListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyPenListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyPenListeners");
          
              return this.__PROXY__.notifyPenListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addPaletteListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addPaletteListener");
          
              return this.__PROXY__.addPaletteListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removePaletteListener = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removePaletteListener");
          
              return this.__PROXY__.removePaletteListener(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyPaletteListeners = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyPaletteListeners");
          
              return this.__PROXY__.notifyPaletteListeners(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.ucsSetEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.ucsSetEvent");
          
              return this.__PROXY__.ucsSetEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.eval = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.eval");
          
              return this.__PROXY__.eval(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.iconSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.iconSize");
          
              return this.__PROXY__.iconSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isAnimated");
          
              return this.__PROXY__.isAnimated(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isDockNestingEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isDockNestingEnabled");
          
              return this.__PROXY__.isDockNestingEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setTabShape = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setTabShape");
          
              return this.__PROXY__.setTabShape(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.tabPosition = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.tabPosition");
          
              return this.__PROXY__.tabPosition(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setTabPosition = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setTabPosition");
          
              return this.__PROXY__.setTabPosition(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setDockOptions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setDockOptions");
          
              return this.__PROXY__.setDockOptions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.isSeparator = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.isSeparator");
          
              return this.__PROXY__.isSeparator(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.menuBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.menuWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.menuWidget");
          
              return this.__PROXY__.menuWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setMenuWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setMenuWidget");
          
              return this.__PROXY__.setMenuWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.statusBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.statusBar");
          
              return this.__PROXY__.statusBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setStatusBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setStatusBar");
          
              return this.__PROXY__.setStatusBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.centralWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.centralWidget");
          
              return this.__PROXY__.centralWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setCentralWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setCentralWidget");
          
              return this.__PROXY__.setCentralWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.takeCentralWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.takeCentralWidget");
          
              return this.__PROXY__.takeCentralWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setCorner = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setCorner");
          
              return this.__PROXY__.setCorner(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.corner = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.corner");
          
              return this.__PROXY__.corner(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addToolBarBreak = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addToolBarBreak");
          
              return this.__PROXY__.addToolBarBreak(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.insertToolBarBreak = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.insertToolBarBreak");
          
              return this.__PROXY__.insertToolBarBreak(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addToolBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addToolBar");
          
              return this.__PROXY__.addToolBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.insertToolBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.insertToolBar");
          
              return this.__PROXY__.insertToolBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeToolBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeToolBar");
          
              return this.__PROXY__.removeToolBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeToolBarBreak = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeToolBarBreak");
          
              return this.__PROXY__.removeToolBarBreak(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.toolBarArea = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.toolBarArea");
          
              return this.__PROXY__.toolBarArea(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.toolBarBreak = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.toolBarBreak");
          
              return this.__PROXY__.toolBarBreak(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.addDockWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.addDockWidget");
          
              return this.__PROXY__.addDockWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.splitDockWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.splitDockWidget");
          
              return this.__PROXY__.splitDockWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.tabifyDockWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.tabifyDockWidget");
          
              return this.__PROXY__.tabifyDockWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.tabifiedDockWidgets = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.tabifiedDockWidgets");
          
              return this.__PROXY__.tabifiedDockWidgets(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.removeDockWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.removeDockWidget");
          
              return this.__PROXY__.removeDockWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.restoreDockWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.restoreDockWidget");
          
              return this.__PROXY__.restoreDockWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dockWidgetArea = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dockWidgetArea");
          
              return this.__PROXY__.dockWidgetArea(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.resizeDocks = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.resizeDocks");
          
              return this.__PROXY__.resizeDocks(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.saveState = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.saveState");
          
              return this.__PROXY__.saveState(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.restoreState = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.restoreState");
          
              return this.__PROXY__.restoreState(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setAnimated");
          
              return this.__PROXY__.setAnimated(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setDockNestingEnabled = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setDockNestingEnabled");
          
              return this.__PROXY__.setDockNestingEnabled(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setUnifiedTitleAndToolBarOnMac = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setUnifiedTitleAndToolBarOnMac");
          
              return this.__PROXY__.setUnifiedTitleAndToolBarOnMac(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getMainWindow = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getMainWindow");
          
              return this.__PROXY__.getMainWindow(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getPositionX = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getPositionX");
          
              return this.__PROXY__.getPositionX(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getPositionY = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getPositionY");
          
              return this.__PROXY__.getPositionY(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.resize = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.move = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.disable = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.disable");
          
              return this.__PROXY__.disable(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.enable = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.enable");
          
              return this.__PROXY__.enable(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.handleUserMessage = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.handleUserMessage");
          
              return this.__PROXY__.handleUserMessage(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.handleUserInfo = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.handleUserInfo");
          
              return this.__PROXY__.handleUserInfo(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.handleUserWarning = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.handleUserWarning");
          
              return this.__PROXY__.handleUserWarning(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.handleUserCommand = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.handleUserCommand");
          
              return this.__PROXY__.handleUserCommand(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.postSelectionChangedEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.postSelectionChangedEvent");
          
              return this.__PROXY__.postSelectionChangedEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.postTransactionEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.postTransactionEvent");
          
              return this.__PROXY__.postTransactionEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.postPropertyEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.postPropertyEvent");
          
              return this.__PROXY__.postPropertyEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.postCloseEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.postCloseEvent");
          
              return this.__PROXY__.postCloseEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getMdiChild = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getMdiChild");
          
              return this.__PROXY__.getMdiChild(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getTabBar = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getTabBar");
          
              return this.__PROXY__.getTabBar(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getMdiArea = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getMdiArea");
          
              return this.__PROXY__.getMdiArea(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.cancelProgress = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.cancelProgress");
          
              return this.__PROXY__.cancelProgress(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setProgress = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setProgress");
          
              return this.__PROXY__.setProgress(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setProgressEnd = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setProgressEnd");
          
              return this.__PROXY__.setProgressEnd(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setProgressText = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setProgressText");
          
              return this.__PROXY__.setProgressText(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setCommandPrompt = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setCommandPrompt");
          
              return this.__PROXY__.setCommandPrompt(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setLeftMouseTip = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setLeftMouseTip");
          
              return this.__PROXY__.setLeftMouseTip(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setRightMouseTip = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setRightMouseTip");
          
              return this.__PROXY__.setRightMouseTip(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.showContextMenu = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.showContextMenu");
          
              return this.__PROXY__.showContextMenu(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.requestResourceBlockEditing = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.requestResourceBlockEditing");
          
              return this.__PROXY__.requestResourceBlockEditing(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.escapeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.escapeEvent");
          
              return this.__PROXY__.escapeEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.setGraphicsViewCursor = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.setGraphicsViewCursor");
          
              return this.__PROXY__.setGraphicsViewCursor(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.readSettings = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.readSettings");
          
              return this.__PROXY__.readSettings(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.writeSettings = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.writeSettings");
          
              return this.__PROXY__.writeSettings(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.createPopupMenu = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.createPopupMenu");
          
              return this.__PROXY__.createPopupMenu(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getChildWidget = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getChildWidget");
          
              return this.__PROXY__.getChildWidget(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getDockWidgets = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getDockWidgets");
          
              return this.__PROXY__.getDockWidgets(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getToolBars = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getToolBars");
          
              return this.__PROXY__.getToolBars(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.clearKeyLog = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.clearKeyLog");
          
              return this.__PROXY__.clearKeyLog(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.getKeyLog = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.getKeyLog");
          
              return this.__PROXY__.getKeyLog(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.quit = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.quit");
          
              return this.__PROXY__.quit(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.currentTabChanged = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.currentTabChanged");
          
              return this.__PROXY__.currentTabChanged(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.subWindowActivated = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.subWindowActivated");
          
              return this.__PROXY__.subWindowActivated(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.event = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.updateGuiActions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.updateGuiActions");
          
              return this.__PROXY__.updateGuiActions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.initGuiActions = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.initGuiActions");
          
              return this.__PROXY__.initGuiActions(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.updateScenes = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.updateScenes");
          
              return this.__PROXY__.updateScenes(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.notifyListenersSlot = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.notifyListenersSlot");
          
              return this.__PROXY__.notifyListenersSlot(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.suspendAndResume = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.suspendAndResume");
          
              return this.__PROXY__.suspendAndResume(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        RMainWindowQt.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RMainWindowQt.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    

      // static functions:
      

        // static function 
        RMainWindowQt.getMainWindow = function() 
          
        {
          //print("JS: RMainWindowQt.getMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindowQt_WrapperSingletonInstance.getMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindowQt);
  }

  
  else {
    
        print("RMainWindowQt.getMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(RMainWindowQt.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'animated', {
              get: function() {
                  
                      return this.__PROXY__.isAnimated();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAnimated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'tabShape', {
              get: function() {
                  
                      return this.__PROXY__.tabShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'dockNestingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isDockNestingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDockNestingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'dockOptions', {
              get: function() {
                  
                      return this.__PROXY__.dockOptions;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDockOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMainWindowQt.prototype, 'unifiedTitleAndToolBarOnMac', {
              get: function() {
                  
                      return this.__PROXY__.unifiedTitleAndToolBarOnMac;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUnifiedTitleAndToolBarOnMac(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'toolButtonStyleChanged', {
            get: function() { return this.__PROXY__.toolButtonStyleChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'toolButtonStyleChanged(Qt::ToolButtonStyle)', {
              get: function() { return this.__PROXY__.toolButtonStyleChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'tabifiedDockWidgetActivated', {
            get: function() { return this.__PROXY__.tabifiedDockWidgetActivated; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'tabifiedDockWidgetActivated(QDockWidget*)', {
              get: function() { return this.__PROXY__.tabifiedDockWidgetActivated; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'commandPrompt', {
            get: function() { return this.__PROXY__.commandPrompt; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'commandPrompt(QString)', {
              get: function() { return this.__PROXY__.commandPrompt; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'leftMouseTip', {
            get: function() { return this.__PROXY__.leftMouseTip; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'leftMouseTip(QString)', {
              get: function() { return this.__PROXY__.leftMouseTip; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'rightMouseTip', {
            get: function() { return this.__PROXY__.rightMouseTip; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'rightMouseTip(QString)', {
              get: function() { return this.__PROXY__.rightMouseTip; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'progress', {
            get: function() { return this.__PROXY__.progress; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'progress(int)', {
              get: function() { return this.__PROXY__.progress; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'progressEnd', {
            get: function() { return this.__PROXY__.progressEnd; },
            configurable: true
        });
        
        Object.defineProperty(RMainWindowQt.prototype, 'progressText', {
            get: function() { return this.__PROXY__.progressText; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'progressText(QString)', {
              get: function() { return this.__PROXY__.progressText; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'progressCanceled', {
            get: function() { return this.__PROXY__.progressCanceled; },
            configurable: true
        });
        
        Object.defineProperty(RMainWindowQt.prototype, 'userMessage', {
            get: function() { return this.__PROXY__.userMessage; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'userMessage(QString,bool)', {
              get: function() { return this.__PROXY__.userMessage; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'userInfo', {
            get: function() { return this.__PROXY__.userInfo; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'userInfo(QString,bool)', {
              get: function() { return this.__PROXY__.userInfo; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'userWarning', {
            get: function() { return this.__PROXY__.userWarning; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'userWarning(QString,bool,bool)', {
              get: function() { return this.__PROXY__.userWarning; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'userCommand', {
            get: function() { return this.__PROXY__.userCommand; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'userCommand(QString,bool)', {
              get: function() { return this.__PROXY__.userCommand; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'reloadXRefsSignal', {
            get: function() { return this.__PROXY__.reloadXRefsSignal; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'reloadXRefsSignal(RDocumentInterface*,QStringList)', {
              get: function() { return this.__PROXY__.reloadXRefsSignal; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'contextMenu', {
            get: function() { return this.__PROXY__.contextMenu; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'contextMenu(int,RVector)', {
              get: function() { return this.__PROXY__.contextMenu; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'editResourceBlock', {
            get: function() { return this.__PROXY__.editResourceBlock; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'editResourceBlock(int,RVector)', {
              get: function() { return this.__PROXY__.editResourceBlock; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'escape', {
            get: function() { return this.__PROXY__.escape; },
            configurable: true
        });
        
        Object.defineProperty(RMainWindowQt.prototype, 'drop', {
            get: function() { return this.__PROXY__.drop; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'drop(QDropEvent*)', {
              get: function() { return this.__PROXY__.drop; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'dragEnter', {
            get: function() { return this.__PROXY__.dragEnter; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'dragEnter(QDragEnterEvent*)', {
              get: function() { return this.__PROXY__.dragEnter; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'resumedTab', {
            get: function() { return this.__PROXY__.resumedTab; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'resumedTab(RMdiChildQt*)', {
              get: function() { return this.__PROXY__.resumedTab; },
              configurable: true
          });
        
        Object.defineProperty(RMainWindowQt.prototype, 'closeRequested', {
            get: function() { return this.__PROXY__.closeRequested; },
            configurable: true
        });
        
        Object.defineProperty(RMainWindowQt.prototype, 'enterPressed', {
            get: function() { return this.__PROXY__.enterPressed; },
            configurable: true
        });
        
        Object.defineProperty(RMainWindowQt.prototype, 'toolBarContextMenu', {
            get: function() { return this.__PROXY__.toolBarContextMenu; },
            configurable: true
        });
        
          Object.defineProperty(RMainWindowQt.prototype, 'toolBarContextMenu(QMenu*)', {
              get: function() { return this.__PROXY__.toolBarContextMenu; },
              configurable: true
          });
        RMainWindowQt.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMainWindowQt.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMainWindowQt.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMainWindowQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMainWindowQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMainWindowQt.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      