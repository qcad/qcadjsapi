
      // auto generated
      //var self;

      // class constructor:
      function RTextEdit() {
        

        // should be RTextEdit_BaseJs.call(this, engine):
        //RTextEdit.prototype = new RTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextEdit.getIdStatic()))) {

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
            qWarning("RTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTextEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit(): wrong number / type of arguments");
      
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

      //RTextEdit.prototype = new RTextEdit_BaseJs(engine);
      //RTextEdit.prototype = new RTextEdit_Wrapper(engine);
      RTextEdit.prototype = new Object();


      RTextEdit.prototype.toString = function() {
          //return "RTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextEdit [JS]";
        };
      RTextEdit.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextBrowser.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RTextEdit.NoFrame = RTextEdit_Wrapper.NoFrame;
RTextEdit.Box = RTextEdit_Wrapper.Box;
RTextEdit.Panel = RTextEdit_Wrapper.Panel;
RTextEdit.WinPanel = RTextEdit_Wrapper.WinPanel;
RTextEdit.HLine = RTextEdit_Wrapper.HLine;
RTextEdit.VLine = RTextEdit_Wrapper.VLine;
RTextEdit.StyledPanel = RTextEdit_Wrapper.StyledPanel;

  // enum: Shadow
RTextEdit.Plain = RTextEdit_Wrapper.Plain;
RTextEdit.Raised = RTextEdit_Wrapper.Raised;
RTextEdit.Sunken = RTextEdit_Wrapper.Sunken;

  // enum: StyleMask
RTextEdit.Shadow_Mask = RTextEdit_Wrapper.Shadow_Mask;
RTextEdit.Shape_Mask = RTextEdit_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RTextEdit.AdjustIgnored = RTextEdit_Wrapper.AdjustIgnored;
RTextEdit.AdjustToContentsOnFirstShow = RTextEdit_Wrapper.AdjustToContentsOnFirstShow;
RTextEdit.AdjustToContents = RTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
RTextEdit.NoWrap = RTextEdit_Wrapper.NoWrap;
RTextEdit.WidgetWidth = RTextEdit_Wrapper.WidgetWidth;
RTextEdit.FixedPixelWidth = RTextEdit_Wrapper.FixedPixelWidth;
RTextEdit.FixedColumnWidth = RTextEdit_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
RTextEdit.AutoNone = RTextEdit_Wrapper.AutoNone;
RTextEdit.AutoBulletList = RTextEdit_Wrapper.AutoBulletList;
RTextEdit.AutoAll = RTextEdit_Wrapper.AutoAll;


      // functions:
      
        // function 
        RTextEdit.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RTextEdit.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RTextEdit.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RTextEdit.prototype.findChild = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RTextEdit.prototype.children = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RTextEdit.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RTextEdit.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RTextEdit.prototype.property = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RTextEdit.prototype.parent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RTextEdit.prototype.devType = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RTextEdit.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isModal = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RTextEdit.prototype.window = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RTextEdit.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFont = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RTextEdit.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RTextEdit.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RTextEdit.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMask = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mask = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RTextEdit.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RTextEdit.prototype.grab = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RTextEdit.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RTextEdit.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RTextEdit.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RTextEdit.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RTextEdit.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RTextEdit.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RTextEdit.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RTextEdit.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RTextEdit.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RTextEdit.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.update = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RTextEdit.prototype.repaint = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RTextEdit.prototype.show = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RTextEdit.prototype.hide = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RTextEdit.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RTextEdit.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RTextEdit.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RTextEdit.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RTextEdit.prototype.close = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RTextEdit.prototype.raise = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RTextEdit.prototype.lower = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RTextEdit.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RTextEdit.prototype.move = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RTextEdit.prototype.resize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RTextEdit.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RTextEdit.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RTextEdit.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RTextEdit.prototype.windowState = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RTextEdit.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RTextEdit.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RTextEdit.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RTextEdit.prototype.layout = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RTextEdit.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setParent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.scroll = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RTextEdit.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RTextEdit.prototype.addAction = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RTextEdit.prototype.addActions = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RTextEdit.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RTextEdit.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RTextEdit.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        RTextEdit.prototype.actions = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RTextEdit.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RTextEdit.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RTextEdit.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RTextEdit.prototype.windowType = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RTextEdit.prototype.childAt = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RTextEdit.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RTextEdit.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RTextEdit.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      RTextEdit.prototype.actionEvent = function() 
        
      {
        //print("JS: RTextEdit.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RTextEdit.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.metric = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RTextEdit.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RTextEdit.prototype.redirected = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RTextEdit.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RTextEdit.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RTextEdit.prototype.create = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RTextEdit.prototype.destroy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RTextEdit.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RTextEdit.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RTextEdit.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RTextEdit.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RTextEdit.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RTextEdit.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        RTextEdit.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        RTextEdit.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        RTextEdit.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
        
        // function 
        RTextEdit.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
        
        // function 
        RTextEdit.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
        
        // function 
        RTextEdit.prototype.viewport = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setViewport = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
        
        // function 
        RTextEdit.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
        
        // function 
        RTextEdit.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
        RTextEdit.prototype.setViewportMargins.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
        RTextEdit.prototype.viewportMargins.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
        RTextEdit.prototype.viewportEvent.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
        RTextEdit.prototype.viewportSizeHint.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTextCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTextCursor");
          
              return this.__PROXY__.setTextCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.textCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.textCursor");
          
              return this.__PROXY__.textCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontPointSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontPointSize");
          
              return this.__PROXY__.fontPointSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontFamily = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontFamily");
          
              return this.__PROXY__.fontFamily(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontWeight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontWeight");
          
              return this.__PROXY__.fontWeight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontUnderline = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontUnderline");
          
              return this.__PROXY__.fontUnderline(...args);
            
        };
        
        // function 
        RTextEdit.prototype.fontItalic = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.fontItalic");
          
              return this.__PROXY__.fontItalic(...args);
            
        };
        
        // function 
        RTextEdit.prototype.textColor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.textColor");
          
              return this.__PROXY__.textColor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.textBackgroundColor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.textBackgroundColor");
          
              return this.__PROXY__.textBackgroundColor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.currentFont = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.currentFont");
          
              return this.__PROXY__.currentFont(...args);
            
        };
        
        // function 
        RTextEdit.prototype.alignment = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mergeCurrentCharFormat = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mergeCurrentCharFormat");
          
              return this.__PROXY__.mergeCurrentCharFormat(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setCurrentCharFormat = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setCurrentCharFormat");
          
              return this.__PROXY__.setCurrentCharFormat(...args);
            
        };
        
        // function 
        RTextEdit.prototype.currentCharFormat = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.currentCharFormat");
          
              return this.__PROXY__.currentCharFormat(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAutoFormatting = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAutoFormatting");
          
              return this.__PROXY__.setAutoFormatting(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTabChangesFocus = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTabChangesFocus");
          
              return this.__PROXY__.setTabChangesFocus(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setDocumentTitle = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setDocumentTitle");
          
              return this.__PROXY__.setDocumentTitle(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isUndoRedoEnabled");
          
              return this.__PROXY__.isUndoRedoEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setUndoRedoEnabled");
          
              return this.__PROXY__.setUndoRedoEnabled(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLineWrapMode = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLineWrapMode");
          
              return this.__PROXY__.setLineWrapMode(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setLineWrapColumnOrWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setLineWrapColumnOrWidth");
          
              return this.__PROXY__.setLineWrapColumnOrWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.wordWrapMode = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.wordWrapMode");
          
              return this.__PROXY__.wordWrapMode(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setWordWrapMode = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setWordWrapMode");
          
              return this.__PROXY__.setWordWrapMode(...args);
            
        };
        
        // function 
        RTextEdit.prototype.toPlainText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.toPlainText");
          
              return this.__PROXY__.toPlainText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.toHtml = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.toHtml");
          
              return this.__PROXY__.toHtml(...args);
            
        };
        
        // function 
        RTextEdit.prototype.ensureCursorVisible = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.ensureCursorVisible");
          
              return this.__PROXY__.ensureCursorVisible(...args);
            
        };
        
        // function 
        RTextEdit.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
        
        // function 
        RTextEdit.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
        
        // function 
        RTextEdit.prototype.anchorAt = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.anchorAt");
          
              return this.__PROXY__.anchorAt(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setOverwriteMode = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setOverwriteMode");
          
              return this.__PROXY__.setOverwriteMode(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTabStopDistance = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTabStopDistance");
          
              return this.__PROXY__.setTabStopDistance(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setCursorWidth = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setCursorWidth");
          
              return this.__PROXY__.setCursorWidth(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAcceptRichText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAcceptRichText");
          
              return this.__PROXY__.setAcceptRichText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.canPaste = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.canPaste");
          
              return this.__PROXY__.canPaste(...args);
            
        };
        
        // function 
        RTextEdit.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFontPointSize = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFontPointSize");
          
              return this.__PROXY__.setFontPointSize(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFontFamily = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFontFamily");
          
              return this.__PROXY__.setFontFamily(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFontWeight = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFontWeight");
          
              return this.__PROXY__.setFontWeight(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFontUnderline = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFontUnderline");
          
              return this.__PROXY__.setFontUnderline(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setFontItalic = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setFontItalic");
          
              return this.__PROXY__.setFontItalic(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTextColor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTextColor");
          
              return this.__PROXY__.setTextColor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setTextBackgroundColor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setTextBackgroundColor");
          
              return this.__PROXY__.setTextBackgroundColor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setCurrentFont = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setCurrentFont");
          
              return this.__PROXY__.setCurrentFont(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setPlainText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setPlainText");
          
              return this.__PROXY__.setPlainText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setHtml = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setHtml");
          
              return this.__PROXY__.setHtml(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setMarkdown = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setMarkdown");
          
              return this.__PROXY__.setMarkdown(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.cut = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
        
        // function 
        RTextEdit.prototype.copy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.paste = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
        
        // function 
        RTextEdit.prototype.undo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.redo = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
        
        // function 
        RTextEdit.prototype.clear = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        RTextEdit.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        RTextEdit.prototype.insertPlainText = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.insertPlainText");
          
              return this.__PROXY__.insertPlainText(...args);
            
        };
        
        // function 
        RTextEdit.prototype.insertHtml = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.insertHtml");
          
              return this.__PROXY__.insertHtml(...args);
            
        };
        
        // function 
        RTextEdit.prototype.append = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.append");
          
              return this.__PROXY__.append(...args);
            
        };
        
        // function 
        RTextEdit.prototype.scrollToAnchor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.scrollToAnchor");
          
              return this.__PROXY__.scrollToAnchor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
        
        // function 
        RTextEdit.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
        
        // function 
        RTextEdit.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        RTextEdit.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.createMimeDataFromSelection = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.createMimeDataFromSelection");
          
              return this.__PROXY__.createMimeDataFromSelection(...args);
            
        };
        
        // function 
        RTextEdit.prototype.canInsertFromMimeData = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.canInsertFromMimeData");
          
              return this.__PROXY__.canInsertFromMimeData(...args);
            
        };
        
        // function 
        RTextEdit.prototype.insertFromMimeData = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.insertFromMimeData");
          
              return this.__PROXY__.insertFromMimeData(...args);
            
        };
        
        // function 
        RTextEdit.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
        
        // function 
        RTextEdit.prototype.doSetTextCursor = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.doSetTextCursor");
          
              return this.__PROXY__.doSetTextCursor(...args);
            
        };
        
        // function 
        RTextEdit.prototype.zoomInF = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.zoomInF");
          
              return this.__PROXY__.zoomInF(...args);
            
        };
        
        // function 
        RTextEdit.prototype.source = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.source");
          
              return this.__PROXY__.source(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setSearchPaths = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setSearchPaths");
          
              return this.__PROXY__.setSearchPaths(...args);
            
        };
        
      // function 
      RTextEdit.prototype.loadResource = function() 
        
      {
        //print("JS: RTextEdit.prototype.loadResource");
        
      if (arguments.length == 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.loadResource(
                // call highest level JS implementation:
                //return this.loadResourceBase(
                
                    return this.__PROXY__.loadResourceSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.loadResource(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RTextEdit.prototype.isBackwardAvailable = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isBackwardAvailable");
          
              return this.__PROXY__.isBackwardAvailable(...args);
            
        };
        
        // function 
        RTextEdit.prototype.isForwardAvailable = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.isForwardAvailable");
          
              return this.__PROXY__.isForwardAvailable(...args);
            
        };
        
        // function 
        RTextEdit.prototype.clearHistory = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.clearHistory");
          
              return this.__PROXY__.clearHistory(...args);
            
        };
        
        // function 
        RTextEdit.prototype.historyTitle = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.historyTitle");
          
              return this.__PROXY__.historyTitle(...args);
            
        };
        
        // function 
        RTextEdit.prototype.historyUrl = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.historyUrl");
          
              return this.__PROXY__.historyUrl(...args);
            
        };
        
        // function 
        RTextEdit.prototype.backwardHistoryCount = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.backwardHistoryCount");
          
              return this.__PROXY__.backwardHistoryCount(...args);
            
        };
        
        // function 
        RTextEdit.prototype.forwardHistoryCount = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.forwardHistoryCount");
          
              return this.__PROXY__.forwardHistoryCount(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setOpenExternalLinks = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setOpenExternalLinks");
          
              return this.__PROXY__.setOpenExternalLinks(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setOpenLinks = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setOpenLinks");
          
              return this.__PROXY__.setOpenLinks(...args);
            
        };
        
        // function 
        RTextEdit.prototype.setSource = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.setSource");
          
              return this.__PROXY__.setSource(...args);
            
        };
        
        // function 
        RTextEdit.prototype.backward = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.backward");
          
              return this.__PROXY__.backward(...args);
            
        };
        
        // function 
        RTextEdit.prototype.forward = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.forward");
          
              return this.__PROXY__.forward(...args);
            
        };
        
        // function 
        RTextEdit.prototype.home = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.home");
          
              return this.__PROXY__.home(...args);
            
        };
        
        // function 
        RTextEdit.prototype.reload = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.reload");
          
              return this.__PROXY__.reload(...args);
            
        };
        
        // function 
        RTextEdit.prototype.event = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RTextEdit.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        
        // function 
        RTextEdit.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        RTextEdit.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RTextEdit.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RTextEdit.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        RTextEdit.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        RTextEdit.prototype.doSetSource = function(...args) 
          
        {
          //print("JS: RTextEdit.prototype.doSetSource");
          
              return this.__PROXY__.doSetSource(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RTextEdit.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'autoFormatting', {
              get: function() {
                  
                      return this.__PROXY__.autoFormatting;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFormatting(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'tabChangesFocus', {
              get: function() {
                  
                      return this.__PROXY__.tabChangesFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabChangesFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'documentTitle', {
              get: function() {
                  
                      return this.__PROXY__.documentTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'undoRedoEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isUndoRedoEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUndoRedoEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'lineWrapMode', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'lineWrapColumnOrWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWrapColumnOrWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWrapColumnOrWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'html', {
              get: function() {
                  
                      return this.__PROXY__.toHtml();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHtml(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'plainText', {
              get: function() {
                  
                      return this.__PROXY__.toPlainText();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlainText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'overwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.overwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'tabStopDistance', {
              get: function() {
                  
                      return this.__PROXY__.tabStopDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabStopDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'acceptRichText', {
              get: function() {
                  
                      return this.__PROXY__.acceptRichText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptRichText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'cursorWidth', {
              get: function() {
                  
                      return this.__PROXY__.cursorWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'document', {
              get: function() {
                  
                      return this.__PROXY__.document;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocument(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'sourceType', {
              get: function() {
                  
                      return this.__PROXY__.sourceType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'searchPaths', {
              get: function() {
                  
                      return this.__PROXY__.searchPaths;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSearchPaths(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'openExternalLinks', {
              get: function() {
                  
                      return this.__PROXY__.openExternalLinks;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpenExternalLinks(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTextEdit.prototype, 'openLinks', {
              get: function() {
                  
                      return this.__PROXY__.openLinks;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpenLinks(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
        Object.defineProperty(RTextEdit.prototype, 'undoAvailable', {
            get: function() { return this.__PROXY__.undoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'undoAvailable(bool)', {
              get: function() { return this.__PROXY__.undoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'redoAvailable', {
            get: function() { return this.__PROXY__.redoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'redoAvailable(bool)', {
              get: function() { return this.__PROXY__.redoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'currentCharFormatChanged', {
            get: function() { return this.__PROXY__.currentCharFormatChanged; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'currentCharFormatChanged(QTextCharFormat)', {
              get: function() { return this.__PROXY__.currentCharFormatChanged; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'copyAvailable', {
            get: function() { return this.__PROXY__.copyAvailable; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'copyAvailable(bool)', {
              get: function() { return this.__PROXY__.copyAvailable; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RTextEdit.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RTextEdit.prototype, 'backwardAvailable', {
            get: function() { return this.__PROXY__.backwardAvailable; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'backwardAvailable(bool)', {
              get: function() { return this.__PROXY__.backwardAvailable; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'forwardAvailable', {
            get: function() { return this.__PROXY__.forwardAvailable; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'forwardAvailable(bool)', {
              get: function() { return this.__PROXY__.forwardAvailable; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'historyChanged', {
            get: function() { return this.__PROXY__.historyChanged; },
            configurable: true
        });
        
        Object.defineProperty(RTextEdit.prototype, 'sourceChanged', {
            get: function() { return this.__PROXY__.sourceChanged; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'sourceChanged(QUrl)', {
              get: function() { return this.__PROXY__.sourceChanged; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'highlighted(QUrl)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RTextEdit.prototype, 'anchorClicked', {
            get: function() { return this.__PROXY__.anchorClicked; },
            configurable: true
        });
        
          Object.defineProperty(RTextEdit.prototype, 'anchorClicked(QUrl)', {
              get: function() { return this.__PROXY__.anchorClicked; },
              configurable: true
          });
        RTextEdit.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTextEdit.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTextEdit.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextEdit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      