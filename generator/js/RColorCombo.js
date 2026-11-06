
      // auto generated
      //var self;

      // class constructor:
      function RColorCombo() {
        

        // should be RColorCombo_BaseJs.call(this, engine):
        //RColorCombo.prototype = new RColorCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RColorCombo.getIdStatic()))) {

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
            qWarning("RColorCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RColorCombo_Wrapper(
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

      

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo(): wrong number / type of arguments");
      
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

      //RColorCombo.prototype = new RColorCombo_BaseJs(engine);
      //RColorCombo.prototype = new RColorCombo_Wrapper(engine);
      RColorCombo.prototype = new Object();


      RColorCombo.prototype.toString = function() {
          //return "RColorCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RColorCombo [JS]";
        };
      RColorCombo.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RColorCombo.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
RColorCombo.NoInsert = RColorCombo_Wrapper.NoInsert;
RColorCombo.InsertAtTop = RColorCombo_Wrapper.InsertAtTop;
RColorCombo.InsertAtCurrent = RColorCombo_Wrapper.InsertAtCurrent;
RColorCombo.InsertAtBottom = RColorCombo_Wrapper.InsertAtBottom;
RColorCombo.InsertAfterCurrent = RColorCombo_Wrapper.InsertAfterCurrent;
RColorCombo.InsertBeforeCurrent = RColorCombo_Wrapper.InsertBeforeCurrent;
RColorCombo.InsertAlphabetically = RColorCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RColorCombo.AdjustToContents = RColorCombo_Wrapper.AdjustToContents;
RColorCombo.AdjustToContentsOnFirstShow = RColorCombo_Wrapper.AdjustToContentsOnFirstShow;
RColorCombo.AdjustToMinimumContentsLengthWithIcon = RColorCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RColorCombo.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RColorCombo.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RColorCombo.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RColorCombo.prototype.findChild = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RColorCombo.prototype.children = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RColorCombo.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RColorCombo.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RColorCombo.prototype.property = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RColorCombo.prototype.parent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RColorCombo.prototype.devType = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RColorCombo.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isModal = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RColorCombo.prototype.window = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RColorCombo.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RColorCombo.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFont = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RColorCombo.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RColorCombo.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RColorCombo.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMask = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mask = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RColorCombo.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RColorCombo.prototype.grab = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RColorCombo.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RColorCombo.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RColorCombo.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RColorCombo.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RColorCombo.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RColorCombo.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RColorCombo.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RColorCombo.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RColorCombo.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RColorCombo.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RColorCombo.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.update = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RColorCombo.prototype.repaint = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RColorCombo.prototype.show = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hide = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RColorCombo.prototype.close = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RColorCombo.prototype.raise = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RColorCombo.prototype.lower = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RColorCombo.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RColorCombo.prototype.move = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RColorCombo.prototype.resize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RColorCombo.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RColorCombo.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RColorCombo.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RColorCombo.prototype.windowState = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RColorCombo.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RColorCombo.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RColorCombo.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RColorCombo.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RColorCombo.prototype.layout = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RColorCombo.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setParent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.scroll = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RColorCombo.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RColorCombo.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RColorCombo.prototype.addAction = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RColorCombo.prototype.addActions = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RColorCombo.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RColorCombo.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RColorCombo.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RColorCombo.prototype.actions = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RColorCombo.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RColorCombo.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RColorCombo.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RColorCombo.prototype.windowType = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RColorCombo.prototype.childAt = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RColorCombo.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RColorCombo.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RColorCombo.prototype.event = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.metric = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RColorCombo.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RColorCombo.prototype.redirected = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RColorCombo.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RColorCombo.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RColorCombo.prototype.create = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RColorCombo.prototype.destroy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RColorCombo.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RColorCombo.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RColorCombo.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RColorCombo.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RColorCombo.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RColorCombo.prototype.findText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.findData = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setEditable = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
    
        // function 
        RColorCombo.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RColorCombo.prototype.completer = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RColorCombo.prototype.model = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RColorCombo.prototype.itemText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
    
        // function 
        RColorCombo.prototype.itemData = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
    
        // function 
        RColorCombo.prototype.addItem = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RColorCombo.prototype.addItems = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        RColorCombo.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        RColorCombo.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        RColorCombo.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        RColorCombo.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setItemText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setItemData = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
    
        // function 
        RColorCombo.prototype.view = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showPopup = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
    
        // function 
        RColorCombo.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RColorCombo.prototype.clear = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RColorCombo.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setEditText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RColorCombo.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RColorCombo.prototype.getColor = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setColor = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setColor");
          
              return this.__PROXY__.setColor(...args);
            
        };
    
        // function 
        RColorCombo.prototype.init = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.init");
          
              return this.__PROXY__.init(...args);
            
        };
    
        // function 
        RColorCombo.prototype.getOnlyFixed = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.getOnlyFixed");
          
              return this.__PROXY__.getOnlyFixed(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setOnlyFixed = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setOnlyFixed");
          
              return this.__PROXY__.setOnlyFixed(...args);
            
        };
    
        // function 
        RColorCombo.prototype.getShowAlphaChannel = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.getShowAlphaChannel");
          
              return this.__PROXY__.getShowAlphaChannel(...args);
            
        };
    
        // function 
        RColorCombo.prototype.setShowAlphaChannel = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.setShowAlphaChannel");
          
              return this.__PROXY__.setShowAlphaChannel(...args);
            
        };
    
        // function 
        RColorCombo.prototype.colorChanged = function(...args) 
          
        {
          //print("JS: RColorCombo.prototype.colorChanged");
          
              return this.__PROXY__.colorChanged(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RColorCombo.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'showAlphaChannel', {
              get: function() {
                  
                      return this.__PROXY__.getShowAlphaChannel();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShowAlphaChannel(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RColorCombo.prototype, 'color', {
              get: function() {
                  
                      return this.__PROXY__.getColor();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'valueChanged(RColor)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(RColorCombo.prototype, 'dialogRunning', {
            get: function() { return this.__PROXY__.dialogRunning; },
            configurable: true
        });
        
          Object.defineProperty(RColorCombo.prototype, 'dialogRunning(bool)', {
              get: function() { return this.__PROXY__.dialogRunning; },
              configurable: true
          });
        RColorCombo.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RColorCombo.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RColorCombo.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RColorCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RColorCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RColorCombo.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      