
  // Auto generated
  
    #ifndef RPROPERTYEVENT_H_WRAPPER
    #define RPROPERTYEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPropertyEvent.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RPropertyEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RPropertyEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RPropertyEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RPropertyEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPropertyEvent
    class QCADJSAPI_EXPORT 
     RPropertyEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPropertyEvent_Wrapper(const RPropertyEvent_Wrapper&);

    public:
      // initialization of RPropertyEvent:
      static void init(RJSApi& handler);

      
        static RPropertyEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RPropertyEvent:
          for (int i=0; i<basecasters_RPropertyEvent.length(); i++) {
            RJSBasecaster_RPropertyEvent* basecaster = basecasters_RPropertyEvent[i];
            RPropertyEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RPropertyEvent:
          if (t==RJSType_RPropertyEvent::getIdStatic()) {
            return (RPropertyEvent*)vp;
          }

          qWarning() << "RPropertyEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RPropertyEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPropertyEvent*: wrapper wraps NULL";
          }

          RPropertyEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPropertyEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RPropertyEvent::None,
Timer = RPropertyEvent::Timer,
MouseButtonPress = RPropertyEvent::MouseButtonPress,
MouseButtonRelease = RPropertyEvent::MouseButtonRelease,
MouseButtonDblClick = RPropertyEvent::MouseButtonDblClick,
MouseMove = RPropertyEvent::MouseMove,
KeyPress = RPropertyEvent::KeyPress,
KeyRelease = RPropertyEvent::KeyRelease,
FocusIn = RPropertyEvent::FocusIn,
FocusOut = RPropertyEvent::FocusOut,
FocusAboutToChange = RPropertyEvent::FocusAboutToChange,
Enter = RPropertyEvent::Enter,
Leave = RPropertyEvent::Leave,
Paint = RPropertyEvent::Paint,
Move = RPropertyEvent::Move,
Resize = RPropertyEvent::Resize,
Create = RPropertyEvent::Create,
Destroy = RPropertyEvent::Destroy,
Show = RPropertyEvent::Show,
Hide = RPropertyEvent::Hide,
Close = RPropertyEvent::Close,
Quit = RPropertyEvent::Quit,
ParentChange = RPropertyEvent::ParentChange,
ParentAboutToChange = RPropertyEvent::ParentAboutToChange,
ThreadChange = RPropertyEvent::ThreadChange,
WindowActivate = RPropertyEvent::WindowActivate,
WindowDeactivate = RPropertyEvent::WindowDeactivate,
ShowToParent = RPropertyEvent::ShowToParent,
HideToParent = RPropertyEvent::HideToParent,
Wheel = RPropertyEvent::Wheel,
WindowTitleChange = RPropertyEvent::WindowTitleChange,
WindowIconChange = RPropertyEvent::WindowIconChange,
ApplicationWindowIconChange = RPropertyEvent::ApplicationWindowIconChange,
ApplicationFontChange = RPropertyEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RPropertyEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RPropertyEvent::ApplicationPaletteChange,
PaletteChange = RPropertyEvent::PaletteChange,
Clipboard = RPropertyEvent::Clipboard,
Speech = RPropertyEvent::Speech,
MetaCall = RPropertyEvent::MetaCall,
SockAct = RPropertyEvent::SockAct,
WinEventAct = RPropertyEvent::WinEventAct,
DeferredDelete = RPropertyEvent::DeferredDelete,
DragEnter = RPropertyEvent::DragEnter,
DragMove = RPropertyEvent::DragMove,
DragLeave = RPropertyEvent::DragLeave,
Drop = RPropertyEvent::Drop,
DragResponse = RPropertyEvent::DragResponse,
ChildAdded = RPropertyEvent::ChildAdded,
ChildPolished = RPropertyEvent::ChildPolished,
ChildRemoved = RPropertyEvent::ChildRemoved,
ShowWindowRequest = RPropertyEvent::ShowWindowRequest,
PolishRequest = RPropertyEvent::PolishRequest,
Polish = RPropertyEvent::Polish,
LayoutRequest = RPropertyEvent::LayoutRequest,
UpdateRequest = RPropertyEvent::UpdateRequest,
UpdateLater = RPropertyEvent::UpdateLater,
EmbeddingControl = RPropertyEvent::EmbeddingControl,
ActivateControl = RPropertyEvent::ActivateControl,
DeactivateControl = RPropertyEvent::DeactivateControl,
ContextMenu = RPropertyEvent::ContextMenu,
InputMethod = RPropertyEvent::InputMethod,
TabletMove = RPropertyEvent::TabletMove,
LocaleChange = RPropertyEvent::LocaleChange,
LanguageChange = RPropertyEvent::LanguageChange,
LayoutDirectionChange = RPropertyEvent::LayoutDirectionChange,
Style = RPropertyEvent::Style,
TabletPress = RPropertyEvent::TabletPress,
TabletRelease = RPropertyEvent::TabletRelease,
OkRequest = RPropertyEvent::OkRequest,
HelpRequest = RPropertyEvent::HelpRequest,
IconDrag = RPropertyEvent::IconDrag,
FontChange = RPropertyEvent::FontChange,
EnabledChange = RPropertyEvent::EnabledChange,
ActivationChange = RPropertyEvent::ActivationChange,
StyleChange = RPropertyEvent::StyleChange,
IconTextChange = RPropertyEvent::IconTextChange,
ModifiedChange = RPropertyEvent::ModifiedChange,
MouseTrackingChange = RPropertyEvent::MouseTrackingChange,
WindowBlocked = RPropertyEvent::WindowBlocked,
WindowUnblocked = RPropertyEvent::WindowUnblocked,
WindowStateChange = RPropertyEvent::WindowStateChange,
ReadOnlyChange = RPropertyEvent::ReadOnlyChange,
ToolTip = RPropertyEvent::ToolTip,
WhatsThis = RPropertyEvent::WhatsThis,
StatusTip = RPropertyEvent::StatusTip,
ActionChanged = RPropertyEvent::ActionChanged,
ActionAdded = RPropertyEvent::ActionAdded,
ActionRemoved = RPropertyEvent::ActionRemoved,
FileOpen = RPropertyEvent::FileOpen,
Shortcut = RPropertyEvent::Shortcut,
ShortcutOverride = RPropertyEvent::ShortcutOverride,
WhatsThisClicked = RPropertyEvent::WhatsThisClicked,
ToolBarChange = RPropertyEvent::ToolBarChange,
ApplicationActivate = RPropertyEvent::ApplicationActivate,
ApplicationActivated = RPropertyEvent::ApplicationActivated,
ApplicationDeactivate = RPropertyEvent::ApplicationDeactivate,
ApplicationDeactivated = RPropertyEvent::ApplicationDeactivated,
QueryWhatsThis = RPropertyEvent::QueryWhatsThis,
EnterWhatsThisMode = RPropertyEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RPropertyEvent::LeaveWhatsThisMode,
ZOrderChange = RPropertyEvent::ZOrderChange,
HoverEnter = RPropertyEvent::HoverEnter,
HoverLeave = RPropertyEvent::HoverLeave,
HoverMove = RPropertyEvent::HoverMove,
AcceptDropsChange = RPropertyEvent::AcceptDropsChange,
ZeroTimerEvent = RPropertyEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RPropertyEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RPropertyEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RPropertyEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RPropertyEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RPropertyEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RPropertyEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RPropertyEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RPropertyEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RPropertyEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RPropertyEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RPropertyEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RPropertyEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RPropertyEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RPropertyEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RPropertyEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RPropertyEvent::KeyboardLayoutChange,
DynamicPropertyChange = RPropertyEvent::DynamicPropertyChange,
TabletEnterProximity = RPropertyEvent::TabletEnterProximity,
TabletLeaveProximity = RPropertyEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RPropertyEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RPropertyEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RPropertyEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RPropertyEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RPropertyEvent::MacSizeChange,
ContentsRectChange = RPropertyEvent::ContentsRectChange,
MacGLWindowChange = RPropertyEvent::MacGLWindowChange,
FutureCallOut = RPropertyEvent::FutureCallOut,
GraphicsSceneResize = RPropertyEvent::GraphicsSceneResize,
GraphicsSceneMove = RPropertyEvent::GraphicsSceneMove,
CursorChange = RPropertyEvent::CursorChange,
ToolTipChange = RPropertyEvent::ToolTipChange,
NetworkReplyUpdated = RPropertyEvent::NetworkReplyUpdated,
GrabMouse = RPropertyEvent::GrabMouse,
UngrabMouse = RPropertyEvent::UngrabMouse,
GrabKeyboard = RPropertyEvent::GrabKeyboard,
UngrabKeyboard = RPropertyEvent::UngrabKeyboard,
StateMachineSignal = RPropertyEvent::StateMachineSignal,
StateMachineWrapped = RPropertyEvent::StateMachineWrapped,
TouchBegin = RPropertyEvent::TouchBegin,
TouchUpdate = RPropertyEvent::TouchUpdate,
TouchEnd = RPropertyEvent::TouchEnd,
NativeGesture = RPropertyEvent::NativeGesture,
RequestSoftwareInputPanel = RPropertyEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RPropertyEvent::CloseSoftwareInputPanel,
WinIdChange = RPropertyEvent::WinIdChange,
Gesture = RPropertyEvent::Gesture,
GestureOverride = RPropertyEvent::GestureOverride,
ScrollPrepare = RPropertyEvent::ScrollPrepare,
Scroll = RPropertyEvent::Scroll,
Expose = RPropertyEvent::Expose,
InputMethodQuery = RPropertyEvent::InputMethodQuery,
OrientationChange = RPropertyEvent::OrientationChange,
TouchCancel = RPropertyEvent::TouchCancel,
ThemeChange = RPropertyEvent::ThemeChange,
SockClose = RPropertyEvent::SockClose,
PlatformPanel = RPropertyEvent::PlatformPanel,
StyleAnimationUpdate = RPropertyEvent::StyleAnimationUpdate,
ApplicationStateChange = RPropertyEvent::ApplicationStateChange,
WindowChangeInternal = RPropertyEvent::WindowChangeInternal,
ScreenChangeInternal = RPropertyEvent::ScreenChangeInternal,
PlatformSurface = RPropertyEvent::PlatformSurface,
Pointer = RPropertyEvent::Pointer,
TabletTrackingChange = RPropertyEvent::TabletTrackingChange,
User = RPropertyEvent::User,
MaxUser = RPropertyEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPropertyEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPropertyEvent_Wrapper(RJSApi& h, RPropertyEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPropertyEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RPropertyEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RPropertyEvent_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
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
            

    // non-static functions:
    
    // Class: RPropertyEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RPropertyEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: RPropertyEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: RPropertyEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: getPropertyTypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPropertyTypeId
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: getValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getValue
              (

                
              )
              
                const
              
              ;
            
    // Class: RPropertyEvent
    // Function: getEntityTypeFilter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityTypeFilter
              (

                
              )
              
                const
              
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
          return RJSType_RPropertyEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RPropertyEvent* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPropertyEvent* getWrapped() const {
          
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

        

        private:

        
          // wrapped object:
          RPropertyEvent* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RPropertyEvent*> basecasters_RPropertyEvent;

      public:
        static void registerBasecaster_RPropertyEvent(RJSBasecaster_RPropertyEvent* bc) {
          basecasters_RPropertyEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RPropertyEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RPropertyEvent_Wrapper, "org.qcad.RPropertyEvent_Wrapper")

  
  #endif
  
