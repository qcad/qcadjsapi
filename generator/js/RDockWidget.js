
      // auto generated
      //var self;

      // class constructor:
      function RDockWidget() {
        

        // should be RDockWidget_BaseJs.call(this, engine):
        //RDockWidget.prototype = new RDockWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDockWidget.getIdStatic()))) {

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
            qWarning("RDockWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDockWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RDockWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, RDockWidget);
  }

  
  else {
    
        print("RDockWidget(): wrong number / type of arguments");
      
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

      //RDockWidget.prototype = new RDockWidget_BaseJs(engine);
      //RDockWidget.prototype = new RDockWidget_Wrapper(engine);
      RDockWidget.prototype = new Object();


      RDockWidget.prototype.toString = function() {
          //return "RDockWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDockWidget [JS]";
        };
      RDockWidget.getObjectType = function() {
        return RJSType_RDockWidget.getIdStatic();
      };

      RDockWidget.prototype.getObjectType = function() {
        return RJSType_RDockWidget.getIdStatic();
      };

      RDockWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDockWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDockWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: DockWidgetFeature
RDockWidget.DockWidgetClosable = RDockWidget_Wrapper.DockWidgetClosable;
RDockWidget.DockWidgetMovable = RDockWidget_Wrapper.DockWidgetMovable;
RDockWidget.DockWidgetFloatable = RDockWidget_Wrapper.DockWidgetFloatable;
RDockWidget.DockWidgetVerticalTitleBar = RDockWidget_Wrapper.DockWidgetVerticalTitleBar;
RDockWidget.DockWidgetFeatureMask = RDockWidget_Wrapper.DockWidgetFeatureMask;
RDockWidget.NoDockWidgetFeatures = RDockWidget_Wrapper.NoDockWidgetFeatures;
RDockWidget.Reserved = RDockWidget_Wrapper.Reserved;


      // functions:
      
        // function 
        RDockWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RDockWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RDockWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RDockWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RDockWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RDockWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RDockWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RDockWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RDockWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RDockWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RDockWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RDockWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RDockWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RDockWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RDockWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RDockWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RDockWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RDockWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RDockWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RDockWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RDockWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RDockWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RDockWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RDockWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RDockWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RDockWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RDockWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RDockWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RDockWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RDockWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RDockWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RDockWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RDockWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RDockWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RDockWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RDockWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RDockWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RDockWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RDockWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RDockWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RDockWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RDockWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RDockWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RDockWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RDockWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RDockWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RDockWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RDockWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RDockWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RDockWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RDockWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RDockWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RDockWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RDockWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RDockWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RDockWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RDockWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RDockWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RDockWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RDockWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RDockWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RDockWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RDockWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RDockWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RDockWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RDockWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RDockWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RDockWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RDockWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RDockWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RDockWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RDockWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RDockWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RDockWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RDockWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RDockWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RDockWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RDockWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RDockWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RDockWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RDockWidget.prototype.widget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFeatures = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFeatures");
          
              return this.__PROXY__.setFeatures(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setFloating = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setFloating");
          
              return this.__PROXY__.setFloating(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isFloating = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isFloating");
          
              return this.__PROXY__.isFloating(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setAllowedAreas = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setAllowedAreas");
          
              return this.__PROXY__.setAllowedAreas(...args);
            
        };
    
        // function 
        RDockWidget.prototype.setTitleBarWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.setTitleBarWidget");
          
              return this.__PROXY__.setTitleBarWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.titleBarWidget = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.titleBarWidget");
          
              return this.__PROXY__.titleBarWidget(...args);
            
        };
    
        // function 
        RDockWidget.prototype.isAreaAllowed = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.isAreaAllowed");
          
              return this.__PROXY__.isAreaAllowed(...args);
            
        };
    
        // function 
        RDockWidget.prototype.toggleViewAction = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.toggleViewAction");
          
              return this.__PROXY__.toggleViewAction(...args);
            
        };
    
        // function 
        RDockWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.actionEvent = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.actionEvent");
          
              return this.__PROXY__.actionEvent(...args);
            
        };
    
        // function 
        RDockWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RDockWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RDockWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'features', {
              get: function() {
                  
                      return this.__PROXY__.features;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFeatures(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'allowedAreas', {
              get: function() {
                  
                      return this.__PROXY__.allowedAreas;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllowedAreas(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RDockWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'featuresChanged', {
            get: function() { return this.__PROXY__.featuresChanged; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'featuresChanged(QDockWidget::DockWidgetFeatures)', {
              get: function() { return this.__PROXY__.featuresChanged; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'topLevelChanged', {
            get: function() { return this.__PROXY__.topLevelChanged; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'topLevelChanged(bool)', {
              get: function() { return this.__PROXY__.topLevelChanged; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'allowedAreasChanged', {
            get: function() { return this.__PROXY__.allowedAreasChanged; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'allowedAreasChanged(Qt::DockWidgetAreas)', {
              get: function() { return this.__PROXY__.allowedAreasChanged; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'visibilityChanged(bool)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'dockLocationChanged', {
            get: function() { return this.__PROXY__.dockLocationChanged; },
            configurable: true
        });
        
          Object.defineProperty(RDockWidget.prototype, 'dockLocationChanged(Qt::DockWidgetArea)', {
              get: function() { return this.__PROXY__.dockLocationChanged; },
              configurable: true
          });
        
        Object.defineProperty(RDockWidget.prototype, 'shown', {
            get: function() { return this.__PROXY__.shown; },
            configurable: true
        });
        
        Object.defineProperty(RDockWidget.prototype, 'hidden', {
            get: function() { return this.__PROXY__.hidden; },
            configurable: true
        });
        RDockWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDockWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDockWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDockWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDockWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDockWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      