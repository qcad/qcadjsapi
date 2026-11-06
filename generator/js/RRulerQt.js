
      // auto generated
      //var self;

      // class constructor:
      function RRulerQt() {
        

        // should be RRulerQt_BaseJs.call(this, engine):
        //RRulerQt.prototype = new RRulerQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRulerQt.getIdStatic()))) {

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
            qWarning("RRulerQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RRulerQt_Wrapper(
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

      

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt(): wrong number / type of arguments");
      
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

      //RRulerQt.prototype = new RRulerQt_BaseJs(engine);
      //RRulerQt.prototype = new RRulerQt_Wrapper(engine);
      RRulerQt.prototype = new Object();


      RRulerQt.prototype.toString = function() {
          //return "RRulerQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRulerQt [JS]";
        };
      RRulerQt.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRulerQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RRuler.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCoordinateListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPaletteListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RRulerQt.NoFrame = RRulerQt_Wrapper.NoFrame;
RRulerQt.Box = RRulerQt_Wrapper.Box;
RRulerQt.Panel = RRulerQt_Wrapper.Panel;
RRulerQt.WinPanel = RRulerQt_Wrapper.WinPanel;
RRulerQt.HLine = RRulerQt_Wrapper.HLine;
RRulerQt.VLine = RRulerQt_Wrapper.VLine;
RRulerQt.StyledPanel = RRulerQt_Wrapper.StyledPanel;

  // enum: Shadow
RRulerQt.Plain = RRulerQt_Wrapper.Plain;
RRulerQt.Raised = RRulerQt_Wrapper.Raised;
RRulerQt.Sunken = RRulerQt_Wrapper.Sunken;

  // enum: StyleMask
RRulerQt.Shadow_Mask = RRulerQt_Wrapper.Shadow_Mask;
RRulerQt.Shape_Mask = RRulerQt_Wrapper.Shape_Mask;


      // functions:
      
        // function 
        RRulerQt.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RRulerQt.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RRulerQt.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RRulerQt.prototype.findChild = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RRulerQt.prototype.children = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RRulerQt.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RRulerQt.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RRulerQt.prototype.property = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RRulerQt.prototype.parent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RRulerQt.prototype.devType = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RRulerQt.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isModal = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RRulerQt.prototype.window = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RRulerQt.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RRulerQt.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFont = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RRulerQt.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RRulerQt.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RRulerQt.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMask = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mask = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RRulerQt.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RRulerQt.prototype.grab = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RRulerQt.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RRulerQt.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RRulerQt.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RRulerQt.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RRulerQt.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RRulerQt.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RRulerQt.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RRulerQt.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RRulerQt.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RRulerQt.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RRulerQt.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RRulerQt.prototype.update = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RRulerQt.prototype.repaint = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RRulerQt.prototype.show = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hide = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RRulerQt.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RRulerQt.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RRulerQt.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RRulerQt.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RRulerQt.prototype.close = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RRulerQt.prototype.raise = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RRulerQt.prototype.lower = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RRulerQt.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RRulerQt.prototype.move = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RRulerQt.prototype.resize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RRulerQt.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RRulerQt.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RRulerQt.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RRulerQt.prototype.windowState = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RRulerQt.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RRulerQt.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RRulerQt.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RRulerQt.prototype.layout = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RRulerQt.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setParent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.scroll = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RRulerQt.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RRulerQt.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RRulerQt.prototype.addAction = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RRulerQt.prototype.addActions = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RRulerQt.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RRulerQt.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RRulerQt.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RRulerQt.prototype.actions = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RRulerQt.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RRulerQt.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RRulerQt.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RRulerQt.prototype.windowType = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RRulerQt.prototype.childAt = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RRulerQt.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RRulerQt.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RRulerQt.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RRulerQt.prototype.event = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RRulerQt.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.metric = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RRulerQt.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RRulerQt.prototype.redirected = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RRulerQt.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RRulerQt.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RRulerQt.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RRulerQt.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RRulerQt.prototype.create = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RRulerQt.prototype.destroy = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RRulerQt.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RRulerQt.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RRulerQt.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RRulerQt.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RRulerQt.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RRulerQt.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setGraphicsView = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setGraphicsView");
          
              return this.__PROXY__.setGraphicsView(...args);
            
        };
    
        // function 
        RRulerQt.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.getOrientation");
          
              return this.__PROXY__.getOrientation(...args);
            
        };
    
        // function 
        RRulerQt.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        RRulerQt.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        RRulerQt.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RRulerQt.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
    
        // function 
        RRulerQt.prototype.paintTick = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.paintTick");
          
              return this.__PROXY__.paintTick(...args);
            
        };
    
        // function 
        RRulerQt.prototype.getFont = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.getFont");
          
              return this.__PROXY__.getFont(...args);
            
        };
    
        // function 
        RRulerQt.prototype.updateViewport = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.updateViewport");
          
              return this.__PROXY__.updateViewport(...args);
            
        };
    
        // function 
        RRulerQt.prototype.updateCoordinate = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.updateCoordinate");
          
              return this.__PROXY__.updateCoordinate(...args);
            
        };
    
        // function 
        RRulerQt.prototype.updatePalette = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.updatePalette");
          
              return this.__PROXY__.updatePalette(...args);
            
        };
    
        // function 
        RRulerQt.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RRulerQt.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RRulerQt.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RRulerQt.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RRulerQt.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RRulerQt.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        RRulerQt.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RRulerQt.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RRulerQt.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRulerQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRulerQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRulerQt.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      