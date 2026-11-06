
      // auto generated
      //var self;

      // class constructor:
      function RListWidget() {
        

        // should be RListWidget_BaseJs.call(this, engine):
        //RListWidget.prototype = new RListWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RListWidget.getIdStatic()))) {

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
            qWarning("RListWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RListWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget(): wrong number / type of arguments");
      
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

      //RListWidget.prototype = new RListWidget_BaseJs(engine);
      //RListWidget.prototype = new RListWidget_Wrapper(engine);
      RListWidget.prototype = new Object();


      RListWidget.prototype.toString = function() {
          //return "RListWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RListWidget [JS]";
        };
      RListWidget.getObjectType = function() {
        return RJSType_RListWidget.getIdStatic();
      };

      RListWidget.prototype.getObjectType = function() {
        return RJSType_RListWidget.getIdStatic();
      };

      RListWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RListWidget.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QListView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QListWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RListWidget.NoFrame = RListWidget_Wrapper.NoFrame;
RListWidget.Box = RListWidget_Wrapper.Box;
RListWidget.Panel = RListWidget_Wrapper.Panel;
RListWidget.WinPanel = RListWidget_Wrapper.WinPanel;
RListWidget.HLine = RListWidget_Wrapper.HLine;
RListWidget.VLine = RListWidget_Wrapper.VLine;
RListWidget.StyledPanel = RListWidget_Wrapper.StyledPanel;

  // enum: Shadow
RListWidget.Plain = RListWidget_Wrapper.Plain;
RListWidget.Raised = RListWidget_Wrapper.Raised;
RListWidget.Sunken = RListWidget_Wrapper.Sunken;

  // enum: StyleMask
RListWidget.Shadow_Mask = RListWidget_Wrapper.Shadow_Mask;
RListWidget.Shape_Mask = RListWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RListWidget.AdjustIgnored = RListWidget_Wrapper.AdjustIgnored;
RListWidget.AdjustToContentsOnFirstShow = RListWidget_Wrapper.AdjustToContentsOnFirstShow;
RListWidget.AdjustToContents = RListWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
RListWidget.NoSelection = RListWidget_Wrapper.NoSelection;
RListWidget.SingleSelection = RListWidget_Wrapper.SingleSelection;
RListWidget.MultiSelection = RListWidget_Wrapper.MultiSelection;
RListWidget.ExtendedSelection = RListWidget_Wrapper.ExtendedSelection;
RListWidget.ContiguousSelection = RListWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RListWidget.SelectItems = RListWidget_Wrapper.SelectItems;
RListWidget.SelectRows = RListWidget_Wrapper.SelectRows;
RListWidget.SelectColumns = RListWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
RListWidget.EnsureVisible = RListWidget_Wrapper.EnsureVisible;
RListWidget.PositionAtTop = RListWidget_Wrapper.PositionAtTop;
RListWidget.PositionAtBottom = RListWidget_Wrapper.PositionAtBottom;
RListWidget.PositionAtCenter = RListWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RListWidget.NoEditTriggers = RListWidget_Wrapper.NoEditTriggers;
RListWidget.CurrentChanged = RListWidget_Wrapper.CurrentChanged;
RListWidget.DoubleClicked = RListWidget_Wrapper.DoubleClicked;
RListWidget.SelectedClicked = RListWidget_Wrapper.SelectedClicked;
RListWidget.EditKeyPressed = RListWidget_Wrapper.EditKeyPressed;
RListWidget.AnyKeyPressed = RListWidget_Wrapper.AnyKeyPressed;
RListWidget.AllEditTriggers = RListWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RListWidget.ScrollPerItem = RListWidget_Wrapper.ScrollPerItem;
RListWidget.ScrollPerPixel = RListWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RListWidget.NoDragDrop = RListWidget_Wrapper.NoDragDrop;
RListWidget.DragOnly = RListWidget_Wrapper.DragOnly;
RListWidget.DropOnly = RListWidget_Wrapper.DropOnly;
RListWidget.DragDrop = RListWidget_Wrapper.DragDrop;
RListWidget.InternalMove = RListWidget_Wrapper.InternalMove;

  // enum: Movement
RListWidget.Static = RListWidget_Wrapper.Static;
RListWidget.Free = RListWidget_Wrapper.Free;
RListWidget.Snap = RListWidget_Wrapper.Snap;

  // enum: Flow
RListWidget.LeftToRight = RListWidget_Wrapper.LeftToRight;
RListWidget.TopToBottom = RListWidget_Wrapper.TopToBottom;

  // enum: ResizeMode
RListWidget.Fixed = RListWidget_Wrapper.Fixed;
RListWidget.Adjust = RListWidget_Wrapper.Adjust;

  // enum: LayoutMode
RListWidget.SinglePass = RListWidget_Wrapper.SinglePass;
RListWidget.Batched = RListWidget_Wrapper.Batched;

  // enum: ViewMode
RListWidget.ListMode = RListWidget_Wrapper.ListMode;
RListWidget.IconMode = RListWidget_Wrapper.IconMode;


      // functions:
      
        // function 
        RListWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RListWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RListWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RListWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RListWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RListWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RListWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RListWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RListWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RListWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RListWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RListWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RListWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RListWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RListWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RListWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RListWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RListWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RListWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RListWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RListWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RListWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RListWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RListWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RListWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RListWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RListWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RListWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RListWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RListWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RListWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RListWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RListWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RListWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RListWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RListWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RListWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RListWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RListWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RListWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RListWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RListWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RListWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RListWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RListWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RListWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RListWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RListWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RListWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RListWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RListWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RListWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RListWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RListWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RListWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RListWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RListWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RListWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RListWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RListWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RListWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RListWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RListWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RListWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RListWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RListWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RListWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RListWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RListWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RListWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RListWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RListWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RListWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RListWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RListWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RListWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RListWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RListWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RListWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RListWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RListWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RListWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RListWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RListWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RListWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RListWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RListWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RListWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RListWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RListWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RListWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RListWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RListWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RListWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RListWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RListWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RListWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RListWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RListWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RListWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RListWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RListWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RListWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RListWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RListWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RListWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RListWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RListWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      RListWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: RListWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RListWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RListWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RListWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RListWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RListWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RListWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RListWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RListWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RListWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RListWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RListWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RListWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RListWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RListWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RListWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RListWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        RListWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        RListWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        RListWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RListWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        RListWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        RListWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        RListWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        RListWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        RListWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        RListWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        RListWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RListWidget.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.model = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        RListWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        RListWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        RListWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        RListWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        RListWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        RListWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        RListWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        RListWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        RListWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RListWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        RListWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        RListWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        RListWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        RListWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        RListWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RListWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        RListWidget.prototype.setMovement = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setMovement");
          
              return this.__PROXY__.setMovement(...args);
            
        };
    
        // function 
        RListWidget.prototype.setFlow = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setFlow");
          
              return this.__PROXY__.setFlow(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWrapping = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWrapping");
          
              return this.__PROXY__.setWrapping(...args);
            
        };
    
        // function 
        RListWidget.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setLayoutMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setLayoutMode");
          
              return this.__PROXY__.setLayoutMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
    
        // function 
        RListWidget.prototype.setBatchSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setBatchSize");
          
              return this.__PROXY__.setBatchSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setGridSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setGridSize");
          
              return this.__PROXY__.setGridSize(...args);
            
        };
    
        // function 
        RListWidget.prototype.setViewMode = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setViewMode");
          
              return this.__PROXY__.setViewMode(...args);
            
        };
    
        // function 
        RListWidget.prototype.clearPropertyFlags = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.clearPropertyFlags");
          
              return this.__PROXY__.clearPropertyFlags(...args);
            
        };
    
        // function 
        RListWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        RListWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        RListWidget.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RListWidget.prototype.setUniformItemSizes = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setUniformItemSizes");
          
              return this.__PROXY__.setUniformItemSizes(...args);
            
        };
    
        // function 
        RListWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSelectionRectVisible = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSelectionRectVisible");
          
              return this.__PROXY__.setSelectionRectVisible(...args);
            
        };
    
        // function 
        RListWidget.prototype.isSelectionRectVisible = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isSelectionRectVisible");
          
              return this.__PROXY__.isSelectionRectVisible(...args);
            
        };
    
        // function 
        RListWidget.prototype.setItemAlignment = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setItemAlignment");
          
              return this.__PROXY__.setItemAlignment(...args);
            
        };
    
        // function 
        RListWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        RListWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        RListWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        RListWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        RListWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        RListWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.resizeContents = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.resizeContents");
          
              return this.__PROXY__.resizeContentsSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.contentsSize = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.contentsSize");
          
              return this.__PROXY__.contentsSizeSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dataChanged");
          
              return this.__PROXY__.dataChangedSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInsertedSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemovedSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.startDrag = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.startDrag");
          
              return this.__PROXY__.startDragSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffsetSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffsetSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.rectForIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.rectForIndex");
          
              return this.__PROXY__.rectForIndexSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.setPositionForIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setPositionForIndex");
          
              return this.__PROXY__.setPositionForIndexSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometriesSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHiddenSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.currentChanged");
          
              return this.__PROXY__.currentChangedSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.item = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.item");
          
              return this.__PROXY__.item(...args);
            
        };
    
        // function 
        RListWidget.prototype.row = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
    
        // function 
        RListWidget.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        RListWidget.prototype.addItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.addItems = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        RListWidget.prototype.takeItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.takeItem");
          
              return this.__PROXY__.takeItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.currentItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.currentItem");
          
              return this.__PROXY__.currentItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.setCurrentItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setCurrentItem");
          
              return this.__PROXY__.setCurrentItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.setCurrentRow = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setCurrentRow");
          
              return this.__PROXY__.setCurrentRow(...args);
            
        };
    
        // function 
        RListWidget.prototype.itemAt = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
    
        // function 
        RListWidget.prototype.visualItemRect = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.visualItemRect");
          
              return this.__PROXY__.visualItemRect(...args);
            
        };
    
        // function 
        RListWidget.prototype.sortItems = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.sortItems");
          
              return this.__PROXY__.sortItems(...args);
            
        };
    
        // function 
        RListWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
    
        // function 
        RListWidget.prototype.editItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.editItem");
          
              return this.__PROXY__.editItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.openPersistentEditor = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.openPersistentEditor");
          
              return this.__PROXY__.openPersistentEditor(...args);
            
        };
    
        // function 
        RListWidget.prototype.closePersistentEditor = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.closePersistentEditor");
          
              return this.__PROXY__.closePersistentEditor(...args);
            
        };
    
        // function 
        RListWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        RListWidget.prototype.itemWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.itemWidget");
          
              return this.__PROXY__.itemWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.setItemWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setItemWidget");
          
              return this.__PROXY__.setItemWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.removeItemWidget = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.removeItemWidget");
          
              return this.__PROXY__.removeItemWidget(...args);
            
        };
    
        // function 
        RListWidget.prototype.selectedItems = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.selectedItems");
          
              return this.__PROXY__.selectedItems(...args);
            
        };
    
        // function 
        RListWidget.prototype.findItems = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.findItems");
          
              return this.__PROXY__.findItems(...args);
            
        };
    
        // function 
        RListWidget.prototype.items = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.items");
          
              return this.__PROXY__.items(...args);
            
        };
    
        // function 
        RListWidget.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.indexFromItem");
          
              return this.__PROXY__.indexFromItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.itemFromIndex");
          
              return this.__PROXY__.itemFromIndex(...args);
            
        };
    
        // function 
        RListWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RListWidget.prototype.scrollToItem = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.scrollToItem");
          
              return this.__PROXY__.scrollToItem(...args);
            
        };
    
        // function 
        RListWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RListWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RListWidget.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        RListWidget.prototype.mimeData = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
    
        // function 
        RListWidget.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
    
        // function 
        RListWidget.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        RListWidget.prototype.setModel = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setModel");
          
              return this.__PROXY__.setModel(...args);
            
        };
    
        // function 
        RListWidget.prototype.sortOrder = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.sortOrder");
          
              return this.__PROXY__.sortOrder(...args);
            
        };
    
        // function 
        RListWidget.prototype.setIconOffset = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.setIconOffset");
          
              return this.__PROXY__.setIconOffset(...args);
            
        };
    
      // function 
      RListWidget.prototype.contextMenuEvent = function() 
        
      {
        //print("JS: RListWidget.prototype.contextMenuEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.contextMenuEvent(
                // call highest level JS implementation:
                //return this.contextMenuEventBase(
                
                    return this.__PROXY__.contextMenuEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RListWidget);
  }

  
  else {
    
        print("RListWidget.contextMenuEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RListWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        RListWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RListWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RListWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'flow', {
              get: function() {
                  
                      return this.__PROXY__.flow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'isWrapping', {
              get: function() {
                  
                      return this.__PROXY__.isWrapping;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWrapping(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'resizeMode', {
              get: function() {
                  
                      return this.__PROXY__.resizeMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setResizeMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'layoutMode', {
              get: function() {
                  
                      return this.__PROXY__.layoutMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'gridSize', {
              get: function() {
                  
                      return this.__PROXY__.gridSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGridSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'viewMode', {
              get: function() {
                  
                      return this.__PROXY__.viewMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setViewMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'uniformItemSizes', {
              get: function() {
                  
                      return this.__PROXY__.uniformItemSizes;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformItemSizes(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'batchSize', {
              get: function() {
                  
                      return this.__PROXY__.batchSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBatchSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'selectionRectVisible', {
              get: function() {
                  
                      return this.__PROXY__.isSelectionRectVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionRectVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'itemAlignment', {
              get: function() {
                  
                      return this.__PROXY__.itemAlignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'movement', {
              get: function() {
                  
                      return this.__PROXY__.movement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'currentRow', {
              get: function() {
                  
                      return this.__PROXY__.currentRow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentRow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RListWidget.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'viewportEntered', {
            get: function() { return this.__PROXY__.viewportEntered; },
            configurable: true
        });
        
        Object.defineProperty(RListWidget.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemPressed', {
            get: function() { return this.__PROXY__.itemPressed; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemPressed(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemPressed; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemClicked', {
            get: function() { return this.__PROXY__.itemClicked; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemClicked(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemClicked; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemDoubleClicked', {
            get: function() { return this.__PROXY__.itemDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemDoubleClicked(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemActivated', {
            get: function() { return this.__PROXY__.itemActivated; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemActivated(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemActivated; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemEntered', {
            get: function() { return this.__PROXY__.itemEntered; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemEntered(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemEntered; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemChanged', {
            get: function() { return this.__PROXY__.itemChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'itemChanged(QListWidgetItem*)', {
              get: function() { return this.__PROXY__.itemChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'currentItemChanged', {
            get: function() { return this.__PROXY__.currentItemChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'currentItemChanged(QListWidgetItem*,QListWidgetItem*)', {
              get: function() { return this.__PROXY__.currentItemChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'currentRowChanged', {
            get: function() { return this.__PROXY__.currentRowChanged; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'currentRowChanged(int)', {
              get: function() { return this.__PROXY__.currentRowChanged; },
              configurable: true
          });
        
        Object.defineProperty(RListWidget.prototype, 'itemSelectionChanged', {
            get: function() { return this.__PROXY__.itemSelectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RListWidget.prototype, 'iconClicked', {
            get: function() { return this.__PROXY__.iconClicked; },
            configurable: true
        });
        
          Object.defineProperty(RListWidget.prototype, 'iconClicked(int,QListWidgetItem*)', {
              get: function() { return this.__PROXY__.iconClicked; },
              configurable: true
          });
        RListWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RListWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RListWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RListWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RListWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RListWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      