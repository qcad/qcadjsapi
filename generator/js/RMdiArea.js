
      // auto generated
      //var self;

      // class constructor:
      function RMdiArea() {
        

        // should be RMdiArea_BaseJs.call(this, engine):
        //RMdiArea.prototype = new RMdiArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMdiArea.getIdStatic()))) {

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
            qWarning("RMdiArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMdiArea_Wrapper(
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

      

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea(): wrong number / type of arguments");
      
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

      //RMdiArea.prototype = new RMdiArea_BaseJs(engine);
      //RMdiArea.prototype = new RMdiArea_Wrapper(engine);
      RMdiArea.prototype = new Object();


      RMdiArea.prototype.toString = function() {
          //return "RMdiArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMdiArea [JS]";
        };
      RMdiArea.getObjectType = function() {
        return RJSType_RMdiArea.getIdStatic();
      };

      RMdiArea.prototype.getObjectType = function() {
        return RJSType_RMdiArea.getIdStatic();
      };

      RMdiArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMdiArea.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMdiArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: AreaOption
RMdiArea.DontMaximizeSubWindowOnActivation = RMdiArea_Wrapper.DontMaximizeSubWindowOnActivation;

  // enum: WindowOrder
RMdiArea.CreationOrder = RMdiArea_Wrapper.CreationOrder;
RMdiArea.StackingOrder = RMdiArea_Wrapper.StackingOrder;
RMdiArea.ActivationHistoryOrder = RMdiArea_Wrapper.ActivationHistoryOrder;

  // enum: ViewMode
RMdiArea.SubWindowView = RMdiArea_Wrapper.SubWindowView;
RMdiArea.TabbedView = RMdiArea_Wrapper.TabbedView;


      // functions:
      
        // function 
        RMdiArea.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RMdiArea.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RMdiArea.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RMdiArea.prototype.findChild = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RMdiArea.prototype.children = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RMdiArea.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RMdiArea.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RMdiArea.prototype.property = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RMdiArea.prototype.parent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RMdiArea.prototype.devType = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RMdiArea.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isModal = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RMdiArea.prototype.window = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RMdiArea.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RMdiArea.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFont = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RMdiArea.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RMdiArea.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RMdiArea.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setMask = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mask = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RMdiArea.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RMdiArea.prototype.grab = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RMdiArea.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RMdiArea.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RMdiArea.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RMdiArea.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RMdiArea.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RMdiArea.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RMdiArea.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RMdiArea.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RMdiArea.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RMdiArea.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RMdiArea.prototype.update = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RMdiArea.prototype.repaint = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RMdiArea.prototype.show = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hide = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RMdiArea.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RMdiArea.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RMdiArea.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RMdiArea.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RMdiArea.prototype.close = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RMdiArea.prototype.raise = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RMdiArea.prototype.lower = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RMdiArea.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RMdiArea.prototype.move = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RMdiArea.prototype.resize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RMdiArea.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RMdiArea.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RMdiArea.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RMdiArea.prototype.windowState = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RMdiArea.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RMdiArea.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RMdiArea.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RMdiArea.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RMdiArea.prototype.layout = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RMdiArea.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setParent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.scroll = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RMdiArea.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RMdiArea.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RMdiArea.prototype.addAction = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RMdiArea.prototype.addActions = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RMdiArea.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RMdiArea.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RMdiArea.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RMdiArea.prototype.actions = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RMdiArea.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RMdiArea.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RMdiArea.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RMdiArea.prototype.windowType = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RMdiArea.prototype.childAt = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RMdiArea.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RMdiArea.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RMdiArea.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RMdiArea.prototype.event = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RMdiArea.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.metric = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RMdiArea.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RMdiArea.prototype.redirected = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RMdiArea.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RMdiArea.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RMdiArea.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RMdiArea.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RMdiArea.prototype.create = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RMdiArea.prototype.destroy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RMdiArea.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RMdiArea.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RMdiArea.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RMdiArea.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RMdiArea.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RMdiArea.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RMdiArea.prototype.currentSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.currentSubWindow");
          
              return this.__PROXY__.currentSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.activeSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.activeSubWindow");
          
              return this.__PROXY__.activeSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.subWindowList = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.subWindowList");
          
              return this.__PROXY__.subWindowList(...args);
            
        };
    
        // function 
        RMdiArea.prototype.addSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.addSubWindow");
          
              return this.__PROXY__.addSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.removeSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.removeSubWindow");
          
              return this.__PROXY__.removeSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.background = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setBackground = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setActivationOrder = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setActivationOrder");
          
              return this.__PROXY__.setActivationOrder(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setOption = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        RMdiArea.prototype.testOption = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setTabsClosable = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setTabsClosable");
          
              return this.__PROXY__.setTabsClosable(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setTabsMovable = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setTabsMovable");
          
              return this.__PROXY__.setTabsMovable(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setTabShape = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setTabShape");
          
              return this.__PROXY__.setTabShape(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setTabPosition = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setTabPosition");
          
              return this.__PROXY__.setTabPosition(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setActiveSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setActiveSubWindow");
          
              return this.__PROXY__.setActiveSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.tileSubWindows = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.tileSubWindows");
          
              return this.__PROXY__.tileSubWindows(...args);
            
        };
    
        // function 
        RMdiArea.prototype.cascadeSubWindows = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.cascadeSubWindows");
          
              return this.__PROXY__.cascadeSubWindows(...args);
            
        };
    
        // function 
        RMdiArea.prototype.closeActiveSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.closeActiveSubWindow");
          
              return this.__PROXY__.closeActiveSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.closeAllSubWindows = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.closeAllSubWindows");
          
              return this.__PROXY__.closeAllSubWindows(...args);
            
        };
    
        // function 
        RMdiArea.prototype.activateNextSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.activateNextSubWindow");
          
              return this.__PROXY__.activateNextSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.activatePreviousSubWindow = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.activatePreviousSubWindow");
          
              return this.__PROXY__.activatePreviousSubWindow(...args);
            
        };
    
        // function 
        RMdiArea.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        RMdiArea.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
    
        // function 
        RMdiArea.prototype.getAddTabButton = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.getAddTabButton");
          
              return this.__PROXY__.getAddTabButton(...args);
            
        };
    
        // function 
        RMdiArea.prototype.updateTabBar = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.updateTabBar");
          
              return this.__PROXY__.updateTabBar(...args);
            
        };
    
        // function 
        RMdiArea.prototype.updateTabBarSize = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.updateTabBarSize");
          
              return this.__PROXY__.updateTabBarSize(...args);
            
        };
    
        // function 
        RMdiArea.prototype.updateAddButtonLocation = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.updateAddButtonLocation");
          
              return this.__PROXY__.updateAddButtonLocation(...args);
            
        };
    
        // function 
        RMdiArea.prototype.closeTab = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.closeTab");
          
              return this.__PROXY__.closeTab(...args);
            
        };
    
        // function 
        RMdiArea.prototype.activateTab = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.activateTab");
          
              return this.__PROXY__.activateTab(...args);
            
        };
    
        // function 
        RMdiArea.prototype.addTabClicked = function(...args) 
          
        {
          //print("JS: RMdiArea.prototype.addTabClicked");
          
              return this.__PROXY__.addTabClicked(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RMdiArea.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'activationOrder', {
              get: function() {
                  
                      return this.__PROXY__.activationOrder;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setActivationOrder(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'tabsClosable', {
              get: function() {
                  
                      return this.__PROXY__.tabsClosable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsClosable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'tabsMovable', {
              get: function() {
                  
                      return this.__PROXY__.tabsMovable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'tabShape', {
              get: function() {
                  
                      return this.__PROXY__.tabShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMdiArea.prototype, 'tabPosition', {
              get: function() {
                  
                      return this.__PROXY__.tabPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RMdiArea.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMdiArea.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMdiArea.prototype, 'subWindowActivated', {
            get: function() { return this.__PROXY__.subWindowActivated; },
            configurable: true
        });
        
          Object.defineProperty(RMdiArea.prototype, 'subWindowActivated(QMdiSubWindow*)', {
              get: function() { return this.__PROXY__.subWindowActivated; },
              configurable: true
          });
        RMdiArea.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMdiArea.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMdiArea.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMdiArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMdiArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMdiArea.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      