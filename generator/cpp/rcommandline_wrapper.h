
  // Auto generated
  
    #ifndef RCOMMANDLINE_H_WRAPPER
    #define RCOMMANDLINE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RCommandLine.h"
      
      // wrapped object is RCommandLine_Base class if new object is created: 
      #include "rcommandline_base.h"
    
      // singleton class wrapper for static functions:
      class RCommandLine_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RCommandLine_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
          //static RCommandLine_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RCommandLine
    class RCommandLine_Wrapper : public RJSWrapperObj {

    
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
     text READ text WRITE setText
  )

  Q_PROPERTY(
    
    QJSValue
     maxLength READ maxLength WRITE setMaxLength
  )

  Q_PROPERTY(
    
    QJSValue
     frame READ hasFrame WRITE setFrame
  )

  Q_PROPERTY(
    
    QJSValue
     echoMode READ echoMode WRITE setEchoMode
  )

  Q_PROPERTY(
    
    QJSValue
     displayText READ displayText
  )

  Q_PROPERTY(
    
    QJSValue
     cursorPosition READ cursorPosition WRITE setCursorPosition
  )

  Q_PROPERTY(
    
    QJSValue
     alignment READ alignment WRITE setAlignment
  )

  Q_PROPERTY(
    
    QJSValue
     modified READ isModified WRITE setModified
  )

  Q_PROPERTY(
    
    QJSValue
     hasSelectedText READ hasSelectedText
  )

  Q_PROPERTY(
    
    QJSValue
     selectedText READ selectedText
  )

  Q_PROPERTY(
    
    QJSValue
     dragEnabled READ dragEnabled WRITE setDragEnabled
  )

  Q_PROPERTY(
    
    QJSValue
     readOnly READ isReadOnly WRITE setReadOnly
  )

  Q_PROPERTY(
    
    QJSValue
     undoAvailable READ isUndoAvailable
  )

  Q_PROPERTY(
    
    QJSValue
     redoAvailable READ isRedoAvailable
  )

  Q_PROPERTY(
    
    QJSValue
     acceptableInput READ hasAcceptableInput
  )

  Q_PROPERTY(
    
    QJSValue
     placeholderText READ placeholderText WRITE setPlaceholderText
  )

  Q_PROPERTY(
    
    QJSValue
     cursorMoveStyle READ cursorMoveStyle WRITE setCursorMoveStyle
  )

  Q_PROPERTY(
    
    QJSValue
     clearButtonEnabled READ isClearButtonEnabled WRITE setClearButtonEnabled
  )


    private:
      // disable copy constructor:
      RCommandLine_Wrapper(const RCommandLine_Wrapper&);

    public:
      // initialization of RCommandLine:
      static void init(RJSApi& handler);

      
        static RCommandLine* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RCommandLine:
          for (int i=0; i<basecasters_RCommandLine.length(); i++) {
            RJSBasecaster_RCommandLine* basecaster = basecasters_RCommandLine[i];
            RCommandLine* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RCommandLine:
          if (t==RJSType_RCommandLine::getIdStatic()) {
            return (RCommandLine*)vp;
          }

          qWarning() << "RCommandLine_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RCommandLine* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RCommandLine*: wrapper wraps NULL";
          }

          RCommandLine* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RCommandLine*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ActionPosition {
    LeadingPosition = RCommandLine::LeadingPosition,
TrailingPosition = RCommandLine::TrailingPosition,

  };
  Q_ENUM(ActionPosition)

  enum EchoMode {
    Normal = RCommandLine::Normal,
NoEcho = RCommandLine::NoEcho,
Password = RCommandLine::Password,
PasswordEchoOnEdit = RCommandLine::PasswordEchoOnEdit,

  };
  Q_ENUM(EchoMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RCommandLine_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RCommandLine_Wrapper(RJSApi& h, RCommandLine* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RCommandLine_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RCommandLine
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RCommandLine_Wrapper
                
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
    
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
    // Function: update
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
    // Function: resizeEvent
    // Source: QWidget
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
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
            
    // Class: RCommandLine
    // Function: text
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: displayText
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  displayText
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: placeholderText
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  placeholderText
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setPlaceholderText
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPlaceholderText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: maxLength
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maxLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setMaxLength
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaxLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: setFrame
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFrame
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: hasFrame
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFrame
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setClearButtonEnabled
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClearButtonEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: isClearButtonEnabled
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isClearButtonEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: echoMode
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  echoMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setEchoMode
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEchoMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: isReadOnly
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isReadOnly
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setReadOnly
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setReadOnly
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: setValidator
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setValidator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: setCompleter
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCompleter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: completer
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  completer
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: sizeHint
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: minimumSizeHint
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: cursorPosition
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setCursorPosition
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursorPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: cursorPositionAt
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorPositionAt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: setAlignment
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAlignment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: alignment
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alignment
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: cursorForward
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorForward
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
            
    // Class: RCommandLine
    // Function: cursorBackward
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorBackward
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
            
    // Class: RCommandLine
    // Function: cursorWordForward
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorWordForward
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: cursorWordBackward
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorWordBackward
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: backspace
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  backspace
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: del
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  del
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: home
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  home
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: end
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  end
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: isModified
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isModified
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setModified
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModified
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: setSelection
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelection
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
            
    // Class: RCommandLine
    // Function: hasSelectedText
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasSelectedText
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: selectedText
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectedText
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: selectionStart
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionStart
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: selectionEnd
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: selectionLength
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectionLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: isUndoAvailable
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUndoAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: isRedoAvailable
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isRedoAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setDragEnabled
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: dragEnabled
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: setCursorMoveStyle
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursorMoveStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: cursorMoveStyle
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursorMoveStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: inputMask
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMask
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setInputMask
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setInputMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: hasAcceptableInput
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasAcceptableInput
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setTextMargins
    // Source: QLineEdit
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextMargins
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
            
    // Class: RCommandLine
    // Function: textMargins
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  textMargins
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: addAction
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addAction
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
            
    // Class: RCommandLine
    // Function: setText
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: clear
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: selectAll
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: undo
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  undo
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: redo
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  redo
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: cut
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cut
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: copy
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copy
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: deselect
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deselect
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: insert
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  insert
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: createStandardContextMenu
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  createStandardContextMenu
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: textChanged
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void textChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void textChangedEmitter(
                const QString& a1
              );
            
    // Class: RCommandLine
    // Function: textEdited
    // Source: QLineEdit
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void textEdited(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void textEditedEmitter(
                const QString& a1
              );
            
    // Class: RCommandLine
    // Function: cursorPositionChanged
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void cursorPositionChanged(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void cursorPositionChangedEmitter(
                int a1, int a2
              );
            
    // Class: RCommandLine
    // Function: returnPressed
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void returnPressed(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void returnPressedEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: editingFinished
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void editingFinished(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void editingFinishedEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: selectionChanged
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void selectionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void selectionChangedEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: inputRejected
    // Source: QLineEdit
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void inputRejected(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void inputRejectedEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: mouseMoveEvent
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: paintEvent
    // Source: QLineEdit
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
            
    // Class: RCommandLine
    // Function: inputMethodQuery
    // Source: QLineEdit
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inputMethodQuery
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
            
    // Class: RCommandLine
    // Function: clearHistory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void clearHistory(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void clearHistoryEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: commandConfirmed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void commandConfirmed(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void commandConfirmedEmitter(
                const QString& command
              );
            
    // Class: RCommandLine
    // Function: completeCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void completeCommand(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void completeCommandEmitter(
                const QString& command
              );
            
    // Class: RCommandLine
    // Function: escape
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void escape(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void escapeEmitter(
                
              );
            
    // Class: RCommandLine
    // Function: getLastCommand
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLastCommand
              (

                
              )
              
              ;
            
    // Class: RCommandLine
    // Function: appendCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  appendCommand
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: getHistory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHistory
              (

                
              )
              
                const
              
              ;
            
    // Class: RCommandLine
    // Function: setHistory
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHistory
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: triggerCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  triggerCommand
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCommandLine
    // Function: paste
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  paste
              (

                
              )
              
              ;
            
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
          return RJSType_RCommandLine::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RCommandLine* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RCommandLine* getWrapped() const {
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
          RCommandLine_Base* getWrappedBase() {
            RCommandLine* w = getWrapped();
            return dynamic_cast<RCommandLine_Base*>(w);
          }

          RCommandLine_Base* getWrappedBase() const {
            RCommandLine* w = getWrapped();
            return dynamic_cast<RCommandLine_Base*>(w);
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
          //  RCommandLine_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RCommandLine* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RCommandLine*> basecasters_RCommandLine;

      public:
        static void registerBasecaster_RCommandLine(RJSBasecaster_RCommandLine* bc) {
          basecasters_RCommandLine.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RCommandLine_Wrapper*)

    Q_DECLARE_INTERFACE(RCommandLine_Wrapper, "org.qcad.RCommandLine_Wrapper")

  
  #endif
  
