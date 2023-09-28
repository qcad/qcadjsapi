
  // Auto generated
  
    #ifndef RLISTWIDGET_H_WRAPPER
    #define RLISTWIDGET_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RListWidget.h"
      
      // wrapped object is RListWidget_Base class if new object is created: 
      #include "rlistwidget_base.h"
    
      // singleton class wrapper for static functions:
      class RListWidget_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RListWidget_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RListWidget
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setTabOrder
    // Source: QWidget
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabOrder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mouseGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mouseGrabber
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: keyboardGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardGrabber
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RListWidget_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RListWidget
    class RListWidget_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     modal READ isModal
  )

  Q_PROPERTY(
    
    QJSValue
     windowModality READ windowModality WRITE setWindowModality
  )

  Q_PROPERTY(
    
    QJSValue
     enabled READ isEnabled WRITE setEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     geometry READ geometry WRITE setGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     frameGeometry READ frameGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     normalGeometry READ normalGeometry
  )

  Q_PROPERTY(
    
    QJSValue
     x READ x
  )

  Q_PROPERTY(
    
    QJSValue
     y READ y
  )

  Q_PROPERTY(
    
    QJSValue
     pos READ pos WRITE move
  )

  Q_PROPERTY(
    
    QJSValue
     frameSize READ frameSize
  )

  Q_PROPERTY(
    
    QJSValue
     size READ size WRITE resize
  )

  Q_PROPERTY(
    
    QJSValue
     width READ width
  )

  Q_PROPERTY(
    
    QJSValue
     height READ height
  )

  Q_PROPERTY(
    
    QJSValue
     rect READ rect
  )

  Q_PROPERTY(
    
    QJSValue
     childrenRect READ childrenRect
  )

  Q_PROPERTY(
    
    QJSValue
     childrenRegion READ childrenRegion
  )

  Q_PROPERTY(
    
    QJSValue
     sizePolicy READ sizePolicy WRITE setSizePolicy
  )

  Q_PROPERTY(
    
    QJSValue
     minimumSize READ minimumSize WRITE setMinimumSize
  )

  Q_PROPERTY(
    
    QJSValue
     maximumSize READ maximumSize WRITE setMaximumSize
  )

  Q_PROPERTY(
    
    QJSValue
     minimumWidth READ minimumWidth WRITE setMinimumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     minimumHeight READ minimumHeight WRITE setMinimumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     maximumWidth READ maximumWidth WRITE setMaximumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     maximumHeight READ maximumHeight WRITE setMaximumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     sizeIncrement READ sizeIncrement WRITE setSizeIncrement
  )

  Q_PROPERTY(
    
    QJSValue
     baseSize READ baseSize WRITE setBaseSize
  )

  Q_PROPERTY(
    
    QJSValue
     palette READ palette WRITE setPalette
  )

  Q_PROPERTY(
    
    QJSValue
     font READ font WRITE setFont
  )

  Q_PROPERTY(
    
    QJSValue
     cursor READ cursor WRITE setCursor
  )

  Q_PROPERTY(
    
    QJSValue
     mouseTracking READ hasMouseTracking WRITE setMouseTracking
  )

  Q_PROPERTY(
    
    QJSValue
     tabletTracking READ hasTabletTracking WRITE setTabletTracking
  )

  Q_PROPERTY(
    
    QJSValue
     isActiveWindow READ isActiveWindow
  )

  Q_PROPERTY(
    
    QJSValue
     focusPolicy READ focusPolicy WRITE setFocusPolicy
  )

  Q_PROPERTY(
    
    QJSValue
     focus READ hasFocus
  )

  Q_PROPERTY(
    
    QJSValue
     contextMenuPolicy READ contextMenuPolicy WRITE setContextMenuPolicy
  )

  Q_PROPERTY(
    
    QJSValue
     updatesEnabled READ updatesEnabled WRITE setUpdatesEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     visible READ isVisible WRITE setVisible
  )

  Q_PROPERTY(
    
    QJSValue
     minimized READ isMinimized
  )

  Q_PROPERTY(
    
    QJSValue
     maximized READ isMaximized
  )

  Q_PROPERTY(
    
    QJSValue
     fullScreen READ isFullScreen
  )

  Q_PROPERTY(
    
    QJSValue
     sizeHint READ sizeHint
  )

  Q_PROPERTY(
    
    QJSValue
     minimumSizeHint READ minimumSizeHint
  )

  Q_PROPERTY(
    
    QJSValue
     acceptDrops READ acceptDrops WRITE setAcceptDrops
  )

  Q_PROPERTY(
    
    QJSValue
     windowTitle READ windowTitle WRITE setWindowTitle
  )

  Q_PROPERTY(
    
    QJSValue
     windowIcon READ windowIcon WRITE setWindowIcon
  )

  Q_PROPERTY(
    
    QJSValue
     windowIconText READ windowIconText WRITE setWindowIconText
  )

  Q_PROPERTY(
    
    QJSValue
     windowOpacity READ windowOpacity WRITE setWindowOpacity
  )

  Q_PROPERTY(
    
    QJSValue
     windowModified READ isWindowModified WRITE setWindowModified
  )

  Q_PROPERTY(
    
    QJSValue
     toolTip READ toolTip WRITE setToolTip
  )

  Q_PROPERTY(
    
    QJSValue
     toolTipDuration READ toolTipDuration WRITE setToolTipDuration
  )

  Q_PROPERTY(
    
    QJSValue
     statusTip READ statusTip WRITE setStatusTip
  )

  Q_PROPERTY(
    
    QJSValue
     whatsThis READ whatsThis WRITE setWhatsThis
  )

  Q_PROPERTY(
    
    QJSValue
     accessibleName READ accessibleName WRITE setAccessibleName
  )

  Q_PROPERTY(
    
    QJSValue
     accessibleDescription READ accessibleDescription WRITE setAccessibleDescription
  )

  Q_PROPERTY(
    
    QJSValue
     layoutDirection READ layoutDirection WRITE setLayoutDirection
  )

  Q_PROPERTY(
    
    QJSValue
     autoFillBackground READ autoFillBackground WRITE setAutoFillBackground
  )

  Q_PROPERTY(
    
    QJSValue
     styleSheet READ styleSheet WRITE setStyleSheet
  )

  Q_PROPERTY(
    
    QJSValue
     locale READ locale WRITE setLocale
  )

  Q_PROPERTY(
    
    QJSValue
     windowFilePath READ windowFilePath WRITE setWindowFilePath
  )

  Q_PROPERTY(
    
    QJSValue
     inputMethodHints READ inputMethodHints WRITE setInputMethodHints
  )

  Q_PROPERTY(
    
    QJSValue
     autoScrollMargin READ autoScrollMargin WRITE setAutoScrollMargin
  )

  Q_PROPERTY(
    
    QJSValue
     editTriggers READ editTriggers WRITE setEditTriggers
  )

  Q_PROPERTY(
    
    QJSValue
     tabKeyNavigation READ tabKeyNavigation WRITE setTabKeyNavigation
  )

  Q_PROPERTY(
    
    QJSValue
     showDropIndicator READ showDropIndicator WRITE setDropIndicatorShown
  )

  Q_PROPERTY(
    
    QJSValue
     dragEnabled READ dragEnabled WRITE setDragEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     dragDropOverwriteMode READ dragDropOverwriteMode WRITE setDragDropOverwriteMode
  )

  Q_PROPERTY(
    
    QJSValue
     dragDropMode READ dragDropMode WRITE setDragDropMode
  )

  Q_PROPERTY(
    
    QJSValue
     defaultDropAction READ defaultDropAction WRITE setDefaultDropAction
  )

  Q_PROPERTY(
    
    QJSValue
     alternatingRowColors READ alternatingRowColors WRITE setAlternatingRowColors
  )

  Q_PROPERTY(
    
    QJSValue
     selectionMode READ selectionMode WRITE setSelectionMode
  )

  Q_PROPERTY(
    
    QJSValue
     selectionBehavior READ selectionBehavior WRITE setSelectionBehavior
  )

  Q_PROPERTY(
    
    QJSValue
     iconSize READ iconSize WRITE setIconSize
  )

  Q_PROPERTY(
    
    QJSValue
     textElideMode READ textElideMode WRITE setTextElideMode
  )

  Q_PROPERTY(
    
    QJSValue
     verticalScrollMode READ verticalScrollMode WRITE setVerticalScrollMode
  )

  Q_PROPERTY(
    
    QJSValue
     horizontalScrollMode READ horizontalScrollMode WRITE setHorizontalScrollMode
  )

  Q_PROPERTY(
    
    QJSValue
     flow READ flow WRITE setFlow
  )

  Q_PROPERTY(
    
    QJSValue
     isWrapping READ isWrapping WRITE setWrapping
  )

  Q_PROPERTY(
    
    QJSValue
     resizeMode READ resizeMode WRITE setResizeMode
  )

  Q_PROPERTY(
    
    QJSValue
     layoutMode READ layoutMode WRITE setLayoutMode
  )

  Q_PROPERTY(
    
    QJSValue
     spacing READ spacing WRITE setSpacing
  )

  Q_PROPERTY(
    
    QJSValue
     gridSize READ gridSize WRITE setGridSize
  )

  Q_PROPERTY(
    
    QJSValue
     viewMode READ viewMode WRITE setViewMode
  )

  Q_PROPERTY(
    
    QJSValue
     modelColumn READ modelColumn WRITE setModelColumn
  )

  Q_PROPERTY(
    
    QJSValue
     uniformItemSizes READ uniformItemSizes WRITE setUniformItemSizes
  )

  Q_PROPERTY(
    
    QJSValue
     batchSize READ batchSize WRITE setBatchSize
  )

  Q_PROPERTY(
    
    QJSValue
     wordWrap READ wordWrap WRITE setWordWrap
  )

  Q_PROPERTY(
    
    QJSValue
     selectionRectVisible READ isSelectionRectVisible WRITE setSelectionRectVisible
  )

  Q_PROPERTY(
    
    QJSValue
     itemAlignment READ itemAlignment WRITE setItemAlignment
  )

  Q_PROPERTY(
    
    QJSValue
     movement READ movement WRITE setMovement
  )

  Q_PROPERTY(
    
    QJSValue
     count READ count
  )

  Q_PROPERTY(
    
    QJSValue
     currentRow READ currentRow WRITE setCurrentRow
  )

  Q_PROPERTY(
    
    QJSValue
     sortingEnabled READ isSortingEnabled WRITE setSortingEnabled
  )


    private:
      // disable copy constructor:
      RListWidget_Wrapper(const RListWidget_Wrapper&);

    public:
      // initialization of RListWidget:
      static void init(RJSApi& handler);

      
        static RListWidget* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RListWidget:
          for (int i=0; i<basecasters_RListWidget.length(); i++) {
            RJSBasecaster_RListWidget* basecaster = basecasters_RListWidget[i];
            RListWidget* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RListWidget:
          if (t==RJSType_RListWidget::getIdStatic()) {
            return (RListWidget*)vp;
          }

          qWarning() << "RListWidget_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RListWidget* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RListWidget*: wrapper wraps NULL";
          }

          RListWidget* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RListWidget*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SizeAdjustPolicy {
    AdjustIgnored = RListWidget::AdjustIgnored,
AdjustToContentsOnFirstShow = RListWidget::AdjustToContentsOnFirstShow,
AdjustToContents = RListWidget::AdjustToContents,

  };
  Q_ENUM(SizeAdjustPolicy)

  enum SelectionMode {
    NoSelection = RListWidget::NoSelection,
SingleSelection = RListWidget::SingleSelection,
MultiSelection = RListWidget::MultiSelection,
ExtendedSelection = RListWidget::ExtendedSelection,
ContiguousSelection = RListWidget::ContiguousSelection,

  };
  Q_ENUM(SelectionMode)

  enum SelectionBehavior {
    SelectItems = RListWidget::SelectItems,
SelectRows = RListWidget::SelectRows,
SelectColumns = RListWidget::SelectColumns,

  };
  Q_ENUM(SelectionBehavior)

  enum ScrollHint {
    EnsureVisible = RListWidget::EnsureVisible,
PositionAtTop = RListWidget::PositionAtTop,
PositionAtBottom = RListWidget::PositionAtBottom,
PositionAtCenter = RListWidget::PositionAtCenter,

  };
  Q_ENUM(ScrollHint)

  enum EditTrigger {
    NoEditTriggers = RListWidget::NoEditTriggers,
CurrentChanged = RListWidget::CurrentChanged,
DoubleClicked = RListWidget::DoubleClicked,
SelectedClicked = RListWidget::SelectedClicked,
EditKeyPressed = RListWidget::EditKeyPressed,
AnyKeyPressed = RListWidget::AnyKeyPressed,
AllEditTriggers = RListWidget::AllEditTriggers,

  };
  Q_ENUM(EditTrigger)

  enum ScrollMode {
    ScrollPerItem = RListWidget::ScrollPerItem,
ScrollPerPixel = RListWidget::ScrollPerPixel,

  };
  Q_ENUM(ScrollMode)

  enum DragDropMode {
    NoDragDrop = RListWidget::NoDragDrop,
DragOnly = RListWidget::DragOnly,
DropOnly = RListWidget::DropOnly,
DragDrop = RListWidget::DragDrop,
InternalMove = RListWidget::InternalMove,

  };
  Q_ENUM(DragDropMode)

  enum Movement {
    Static = RListWidget::Static,
Free = RListWidget::Free,
Snap = RListWidget::Snap,

  };
  Q_ENUM(Movement)

  enum Flow {
    LeftToRight = RListWidget::LeftToRight,
TopToBottom = RListWidget::TopToBottom,

  };
  Q_ENUM(Flow)

  enum ResizeMode {
    Fixed = RListWidget::Fixed,
Adjust = RListWidget::Adjust,

  };
  Q_ENUM(ResizeMode)

  enum LayoutMode {
    SinglePass = RListWidget::SinglePass,
Batched = RListWidget::Batched,

  };
  Q_ENUM(LayoutMode)

  enum ViewMode {
    ListMode = RListWidget::ListMode,
IconMode = RListWidget::IconMode,

  };
  Q_ENUM(ViewMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RListWidget_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RListWidget_Wrapper(RJSApi& h, RListWidget* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RListWidget_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RListWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RListWidget_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RListWidget
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: devType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devType
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: createWinId
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createWinId
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: isWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindow
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isModal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isModal
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: windowModality
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowModality
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowModality
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowModality
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isEnabledTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabledTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setDisabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDisabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowModified
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: frameGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: geometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  geometry
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: normalGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: x
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  x
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: y
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  y
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: pos
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: frameSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: size
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: width
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: height
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: rect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rect
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: childrenRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childrenRect
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: childrenRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childrenRegion
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: minimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: maximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: minimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: minimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: maximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: maximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setMinimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMaximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMinimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMinimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMaximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMaximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: sizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeIncrement
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeIncrement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: baseSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baseSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setBaseSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setFixedSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setFixedWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setFixedHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFixedHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mapToGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: mapFromGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: mapToParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: mapFromParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: mapTo
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: mapFrom
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: window
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  window
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: nativeParentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeParentWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: topLevelWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  topLevelWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: palette
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  palette
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setPalette
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPalette
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setBackgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackgroundRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: backgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  backgroundRole
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setForegroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setForegroundRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: foregroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  foregroundRole
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: font
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  font
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFont
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFont
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: fontInfo
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fontInfo
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: cursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursor
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setCursor
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: unsetCursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetCursor
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMouseTracking
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: hasMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasMouseTracking
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: underMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  underMouse
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabletTracking
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: hasTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasTabletTracking
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setMask
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mask
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: clearMask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearMask
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: grab
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grab
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: grabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabGesture
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: ungrabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungrabGesture
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setWindowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowTitle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setStyleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyleSheet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: styleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  styleSheet
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: windowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowTitle
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowIcon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowIcon
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowIconText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowIconText
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowRole
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowRole
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFilePath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowFilePath
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowOpacity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowOpacity
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowModified
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setToolTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: toolTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTip
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setToolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setToolTipDuration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: toolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTipDuration
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setStatusTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStatusTip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: statusTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  statusTip
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWhatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWhatsThis
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: whatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  whatsThis
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: accessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accessibleName
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAccessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccessibleName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: accessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accessibleDescription
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAccessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccessibleDescription
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutDirection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: layoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutDirection
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: unsetLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetLayoutDirection
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setLocale
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: locale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  locale
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: unsetLocale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetLocale
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: isRightToLeft
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRightToLeft
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isLeftToRight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLeftToRight
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isActiveWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isActiveWindow
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: activateWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  activateWindow
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: clearFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearFocus
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setFocus
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: focusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFocusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocusPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: hasFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFocus
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFocusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFocusProxy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: focusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusProxy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: contextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contextMenuPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setContextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContextMenuPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: grabMouse
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabMouse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: releaseMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseMouse
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: grabKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabKeyboard
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: releaseKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseKeyboard
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: grabShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabShortcut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: releaseShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  releaseShortcut
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setShortcutEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShortcutEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setShortcutAutoRepeat
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setShortcutAutoRepeat
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: updatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updatesEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setUpdatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpdatesEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: repaint
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  repaint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setVisible
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setHidden
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: show
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  show
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: hide
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hide
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: showMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMinimized
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: showMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMaximized
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: showFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showFullScreen
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: showNormal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showNormal
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: close
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  close
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: raise
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  raise
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: lower
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lower
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: stackUnder
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stackUnder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: move
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: resize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: saveGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  saveGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: restoreGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  restoreGeometry
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: adjustSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  adjustSize
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: isVisible
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisible
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isVisibleTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisibleTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isHidden
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isHidden
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMinimized
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMaximized
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isFullScreen
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: windowState
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowState
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: overrideWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overrideWindowState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: sizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizePolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizePolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: heightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  heightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: hasHeightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasHeightForWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: visibleRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visibleRegion
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setContentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContentsMargins
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: contentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentsMargins
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: contentsRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentsRect
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: layout
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layout
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setLayout
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayout
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: updateGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateGeometry
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setParent
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: scroll
    // Source: QWidget
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scroll
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: focusWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: nextInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextInFocusChain
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: previousInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  previousInFocusChain
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: acceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptDrops
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAcceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAcceptDrops
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: addAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: addActions
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addActions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: insertActions
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertActions
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: insertAction
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: removeAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: actions
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  actions
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: parentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parentWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowFlags
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWindowFlag
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowFlag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: overrideWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overrideWindowFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: windowType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowType
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: childAt
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  childAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: testAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: paintEngine
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  paintEngine
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: ensurePolished
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ensurePolished
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: isAncestorOf
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAncestorOf
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: autoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoFillBackground
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAutoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoFillBackground
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: customContextMenuRequested
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void customContextMenuRequested(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void customContextMenuRequestedEmitter(
                const QPoint& pos
              );
            
    // Class: RListWidget
    // Function: actionEvent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      actionEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: inputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMethodHints
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setInputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInputMethodHints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: frameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFrameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: frameWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: frameShape
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameShape
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFrameShape
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: frameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameShadow
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFrameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameShadow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: lineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: midLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  midLineWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setMidLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMidLineWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: frameRect
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameRect
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFrameRect
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrameRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: verticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollBarPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setVerticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollBarPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: verticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollBar
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setVerticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollBar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: horizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollBarPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setHorizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollBarPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: horizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollBar
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setHorizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollBar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: cornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cornerWidget
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setCornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCornerWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: addScrollBarWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addScrollBarWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: viewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  viewport
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewport
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: maximumViewportSize
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumViewportSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: minimumSizeHint
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: sizeHint
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setupViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setupViewport
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: sizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeAdjustPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeAdjustPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setViewportMargins
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      setViewportMarginsSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: viewportMargins
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportMarginsSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: eventFilter
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      eventFilterSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: viewportEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mouseDoubleClickEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseDoubleClickEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: dragEnterEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dragEnterEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: keyPressEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      keyPressEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: model
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  model
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSelectionModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionModel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: selectionModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionModel
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setItemDelegate
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItemDelegate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setSelectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: selectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSelectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionBehavior
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: selectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionBehavior
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: currentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: rootIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rootIndex
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setEditTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEditTriggers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: editTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  editTriggers
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalScrollMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: verticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalScrollMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: resetVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetVerticalScrollMode
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalScrollMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: horizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalScrollMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: resetHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetHorizontalScrollMode
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoScroll
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: hasAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAutoScroll
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAutoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoScrollMargin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: autoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  autoScrollMargin
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setTabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTabKeyNavigation
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: tabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tabKeyNavigation
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setDropIndicatorShown
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDropIndicatorShown
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: showDropIndicator
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showDropIndicator
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setDragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: dragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setDragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragDropOverwriteMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: dragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragDropOverwriteMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setDragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDragDropMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: dragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dragDropMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setDefaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultDropAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: defaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultDropAction
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setAlternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlternatingRowColors
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: alternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alternatingRowColors
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setIconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIconSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: iconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  iconSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setTextElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextElideMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: textElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textElideMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: keyboardSearch
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardSearch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setIndexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIndexWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: indexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: inputMethodQuery
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMethodQuery
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: selectAll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectAll
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: edit
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  edit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: clearSelection
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearSelection
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setCurrentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: scrollToTop
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToTop
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: scrollToBottom
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToBottom
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: update
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: pressed
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void pressed(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void pressedEmitter(
                const QModelIndex& index
              );
            
    // Class: RListWidget
    // Function: clicked
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void clicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void clickedEmitter(
                const QModelIndex& index
              );
            
    // Class: RListWidget
    // Function: doubleClicked
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void doubleClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void doubleClickedEmitter(
                const QModelIndex& index
              );
            
    // Class: RListWidget
    // Function: activated
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void activated(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void activatedEmitter(
                const QModelIndex& index
              );
            
    // Class: RListWidget
    // Function: entered
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void entered(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void enteredEmitter(
                const QModelIndex& index
              );
            
    // Class: RListWidget
    // Function: viewportEntered
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void viewportEntered(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void viewportEnteredEmitter(
                
              );
            
    // Class: RListWidget
    // Function: iconSizeChanged
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void iconSizeChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void iconSizeChangedEmitter(
                const QSize& size
              );
            
    // Class: RListWidget
    // Function: setMovement
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMovement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: movement
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  movement
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setFlow
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: flow
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flow
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWrapping
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWrapping
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isWrapping
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWrapping
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setResizeMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setResizeMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: resizeMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resizeMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setLayoutMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayoutMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: layoutMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  layoutMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSpacing
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpacing
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: spacing
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spacing
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setBatchSize
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBatchSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: batchSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  batchSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setGridSize
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGridSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: gridSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  gridSize
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setViewMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setViewMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: viewMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  viewMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: clearPropertyFlags
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPropertyFlags
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: isRowHidden
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRowHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setRowHidden
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRowHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setModelColumn
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModelColumn
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: modelColumn
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modelColumn
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setUniformItemSizes
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUniformItemSizes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: uniformItemSizes
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  uniformItemSizes
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setWordWrap
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWordWrap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: wordWrap
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  wordWrap
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setSelectionRectVisible
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectionRectVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isSelectionRectVisible
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelectionRectVisible
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setItemAlignment
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItemAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: itemAlignment
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemAlignment
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: visualRect
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: scrollTo
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: indexAt
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: doItemsLayout
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  doItemsLayout
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: reset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: setRootIndex
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRootIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: scrollContentsBy
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      scrollContentsBySuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: resizeContents
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeContentsSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: contentsSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      contentsSizeSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: dataChanged
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dataChangedSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: rowsInserted
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rowsInsertedSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: rowsAboutToBeRemoved
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rowsAboutToBeRemovedSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: wheelEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      wheelEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: resizeEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: startDrag
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      startDragSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: paintEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      paintEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: horizontalOffset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      horizontalOffsetSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: verticalOffset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      verticalOffsetSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: rectForIndex
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rectForIndexSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setPositionForIndex
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      setPositionForIndexSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: updateGeometries
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      updateGeometriesSuper
                    
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: isIndexHidden
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      isIndexHiddenSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: currentChanged
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      currentChangedSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: viewportSizeHint
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportSizeHintSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: item
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  item
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: row
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  row
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: insertItem
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: insertItems
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insertItems
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: addItem
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: addItems
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addItems
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: takeItem
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  takeItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: count
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  count
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: currentItem
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentItem
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setCurrentItem
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: currentRow
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentRow
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setCurrentRow
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentRow
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: itemAt
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: visualItemRect
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visualItemRect
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: sortItems
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sortItems
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: setSortingEnabled
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSortingEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isSortingEnabled
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSortingEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: editItem
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  editItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: openPersistentEditor
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  openPersistentEditor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: closePersistentEditor
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  closePersistentEditor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: isPersistentEditorOpen
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPersistentEditorOpen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: itemWidget
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: setItemWidget
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setItemWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: removeItemWidget
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeItemWidget
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: selectedItems
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectedItems
              (

                
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: findItems
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findItems
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: items
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  items
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: indexFromItem
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  indexFromItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: itemFromIndex
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  itemFromIndex
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RListWidget
    // Function: scrollToItem
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scrollToItem
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: clear
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: RListWidget
    // Function: itemPressed
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemPressed(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemPressedEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: itemClicked
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemClickedEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: itemDoubleClicked
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemDoubleClicked(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemDoubleClickedEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: itemActivated
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemActivated(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemActivatedEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: itemEntered
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemEntered(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemEnteredEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: itemChanged
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemChangedEmitter(
                QListWidgetItem* item
              );
            
    // Class: RListWidget
    // Function: currentItemChanged
    // Source: QListWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void currentItemChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void currentItemChangedEmitter(
                QListWidgetItem* current, QListWidgetItem* previous
              );
            
    // Class: RListWidget
    // Function: currentTextChanged
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void currentTextChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void currentTextChangedEmitter(
                const QString& currentText
              );
            
    // Class: RListWidget
    // Function: currentRowChanged
    // Source: QListWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void currentRowChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void currentRowChangedEmitter(
                int currentRow
              );
            
    // Class: RListWidget
    // Function: itemSelectionChanged
    // Source: QListWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void itemSelectionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void itemSelectionChangedEmitter(
                
              );
            
    // Class: RListWidget
    // Function: setIconOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIconOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: contextMenuEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      contextMenuEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mousePressEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseReleaseEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RListWidget
    // Function: iconClicked
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void iconClicked(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void iconClickedEmitter(
                int x, QListWidgetItem* item
              );
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RListWidget::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RListWidget* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RListWidget* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        
          // get wrapped base object or nullptr:
          RListWidget_Base* getWrappedBase() {
            RListWidget* w = getWrapped();
            return dynamic_cast<RListWidget_Base*>(w);
          }

          RListWidget_Base* getWrappedBase() const {
            RListWidget* w = getWrapped();
            return dynamic_cast<RListWidget_Base*>(w);
          }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        
          //void setRecFlag(bool on) const {
          //  RListWidget_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RListWidget* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RListWidget*> basecasters_RListWidget;

      public:
        static void registerBasecaster_RListWidget(RJSBasecaster_RListWidget* bc) {
          basecasters_RListWidget.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RListWidget_Wrapper*)

    Q_DECLARE_INTERFACE(RListWidget_Wrapper, "org.qcad.RListWidget_Wrapper")

  
  #endif
  
