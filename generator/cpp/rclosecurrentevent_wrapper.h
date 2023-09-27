
  // Auto generated
  
    #ifndef RCLOSECURRENTEVENT_H_WRAPPER
    #define RCLOSECURRENTEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RCloseCurrentEvent.h"
      
      // singleton class wrapper for static functions:
      class RCloseCurrentEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RCloseCurrentEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RCloseCurrentEvent
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
          //static RCloseCurrentEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RCloseCurrentEvent
    class RCloseCurrentEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RCloseCurrentEvent_Wrapper(const RCloseCurrentEvent_Wrapper&);

    public:
      // initialization of RCloseCurrentEvent:
      static void init(RJSApi& handler);

      
        static RCloseCurrentEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RCloseCurrentEvent.length(); i++) {
            RJSBasecaster_RCloseCurrentEvent* basecaster = basecasters_RCloseCurrentEvent[i];
            RCloseCurrentEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RCloseCurrentEvent::getIdStatic()) {
            return (RCloseCurrentEvent*)vp;
          }

          qWarning() << "RCloseCurrentEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RCloseCurrentEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RCloseCurrentEvent*: wrapper wraps NULL";
          }

          RCloseCurrentEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RCloseCurrentEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RCloseCurrentEvent::None,
Timer = RCloseCurrentEvent::Timer,
MouseButtonPress = RCloseCurrentEvent::MouseButtonPress,
MouseButtonRelease = RCloseCurrentEvent::MouseButtonRelease,
MouseButtonDblClick = RCloseCurrentEvent::MouseButtonDblClick,
MouseMove = RCloseCurrentEvent::MouseMove,
KeyPress = RCloseCurrentEvent::KeyPress,
KeyRelease = RCloseCurrentEvent::KeyRelease,
FocusIn = RCloseCurrentEvent::FocusIn,
FocusOut = RCloseCurrentEvent::FocusOut,
FocusAboutToChange = RCloseCurrentEvent::FocusAboutToChange,
Enter = RCloseCurrentEvent::Enter,
Leave = RCloseCurrentEvent::Leave,
Paint = RCloseCurrentEvent::Paint,
Move = RCloseCurrentEvent::Move,
Resize = RCloseCurrentEvent::Resize,
Create = RCloseCurrentEvent::Create,
Destroy = RCloseCurrentEvent::Destroy,
Show = RCloseCurrentEvent::Show,
Hide = RCloseCurrentEvent::Hide,
Close = RCloseCurrentEvent::Close,
Quit = RCloseCurrentEvent::Quit,
ParentChange = RCloseCurrentEvent::ParentChange,
ParentAboutToChange = RCloseCurrentEvent::ParentAboutToChange,
ThreadChange = RCloseCurrentEvent::ThreadChange,
WindowActivate = RCloseCurrentEvent::WindowActivate,
WindowDeactivate = RCloseCurrentEvent::WindowDeactivate,
ShowToParent = RCloseCurrentEvent::ShowToParent,
HideToParent = RCloseCurrentEvent::HideToParent,
Wheel = RCloseCurrentEvent::Wheel,
WindowTitleChange = RCloseCurrentEvent::WindowTitleChange,
WindowIconChange = RCloseCurrentEvent::WindowIconChange,
ApplicationWindowIconChange = RCloseCurrentEvent::ApplicationWindowIconChange,
ApplicationFontChange = RCloseCurrentEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RCloseCurrentEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RCloseCurrentEvent::ApplicationPaletteChange,
PaletteChange = RCloseCurrentEvent::PaletteChange,
Clipboard = RCloseCurrentEvent::Clipboard,
Speech = RCloseCurrentEvent::Speech,
MetaCall = RCloseCurrentEvent::MetaCall,
SockAct = RCloseCurrentEvent::SockAct,
WinEventAct = RCloseCurrentEvent::WinEventAct,
DeferredDelete = RCloseCurrentEvent::DeferredDelete,
DragEnter = RCloseCurrentEvent::DragEnter,
DragMove = RCloseCurrentEvent::DragMove,
DragLeave = RCloseCurrentEvent::DragLeave,
Drop = RCloseCurrentEvent::Drop,
DragResponse = RCloseCurrentEvent::DragResponse,
ChildAdded = RCloseCurrentEvent::ChildAdded,
ChildPolished = RCloseCurrentEvent::ChildPolished,
ChildRemoved = RCloseCurrentEvent::ChildRemoved,
ShowWindowRequest = RCloseCurrentEvent::ShowWindowRequest,
PolishRequest = RCloseCurrentEvent::PolishRequest,
Polish = RCloseCurrentEvent::Polish,
LayoutRequest = RCloseCurrentEvent::LayoutRequest,
UpdateRequest = RCloseCurrentEvent::UpdateRequest,
UpdateLater = RCloseCurrentEvent::UpdateLater,
EmbeddingControl = RCloseCurrentEvent::EmbeddingControl,
ActivateControl = RCloseCurrentEvent::ActivateControl,
DeactivateControl = RCloseCurrentEvent::DeactivateControl,
ContextMenu = RCloseCurrentEvent::ContextMenu,
InputMethod = RCloseCurrentEvent::InputMethod,
TabletMove = RCloseCurrentEvent::TabletMove,
LocaleChange = RCloseCurrentEvent::LocaleChange,
LanguageChange = RCloseCurrentEvent::LanguageChange,
LayoutDirectionChange = RCloseCurrentEvent::LayoutDirectionChange,
Style = RCloseCurrentEvent::Style,
TabletPress = RCloseCurrentEvent::TabletPress,
TabletRelease = RCloseCurrentEvent::TabletRelease,
OkRequest = RCloseCurrentEvent::OkRequest,
HelpRequest = RCloseCurrentEvent::HelpRequest,
IconDrag = RCloseCurrentEvent::IconDrag,
FontChange = RCloseCurrentEvent::FontChange,
EnabledChange = RCloseCurrentEvent::EnabledChange,
ActivationChange = RCloseCurrentEvent::ActivationChange,
StyleChange = RCloseCurrentEvent::StyleChange,
IconTextChange = RCloseCurrentEvent::IconTextChange,
ModifiedChange = RCloseCurrentEvent::ModifiedChange,
MouseTrackingChange = RCloseCurrentEvent::MouseTrackingChange,
WindowBlocked = RCloseCurrentEvent::WindowBlocked,
WindowUnblocked = RCloseCurrentEvent::WindowUnblocked,
WindowStateChange = RCloseCurrentEvent::WindowStateChange,
ReadOnlyChange = RCloseCurrentEvent::ReadOnlyChange,
ToolTip = RCloseCurrentEvent::ToolTip,
WhatsThis = RCloseCurrentEvent::WhatsThis,
StatusTip = RCloseCurrentEvent::StatusTip,
ActionChanged = RCloseCurrentEvent::ActionChanged,
ActionAdded = RCloseCurrentEvent::ActionAdded,
ActionRemoved = RCloseCurrentEvent::ActionRemoved,
FileOpen = RCloseCurrentEvent::FileOpen,
Shortcut = RCloseCurrentEvent::Shortcut,
ShortcutOverride = RCloseCurrentEvent::ShortcutOverride,
WhatsThisClicked = RCloseCurrentEvent::WhatsThisClicked,
ToolBarChange = RCloseCurrentEvent::ToolBarChange,
ApplicationActivate = RCloseCurrentEvent::ApplicationActivate,
ApplicationActivated = RCloseCurrentEvent::ApplicationActivated,
ApplicationDeactivate = RCloseCurrentEvent::ApplicationDeactivate,
ApplicationDeactivated = RCloseCurrentEvent::ApplicationDeactivated,
QueryWhatsThis = RCloseCurrentEvent::QueryWhatsThis,
EnterWhatsThisMode = RCloseCurrentEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RCloseCurrentEvent::LeaveWhatsThisMode,
ZOrderChange = RCloseCurrentEvent::ZOrderChange,
HoverEnter = RCloseCurrentEvent::HoverEnter,
HoverLeave = RCloseCurrentEvent::HoverLeave,
HoverMove = RCloseCurrentEvent::HoverMove,
AcceptDropsChange = RCloseCurrentEvent::AcceptDropsChange,
ZeroTimerEvent = RCloseCurrentEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RCloseCurrentEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RCloseCurrentEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RCloseCurrentEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RCloseCurrentEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RCloseCurrentEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RCloseCurrentEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RCloseCurrentEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RCloseCurrentEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RCloseCurrentEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RCloseCurrentEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RCloseCurrentEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RCloseCurrentEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RCloseCurrentEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RCloseCurrentEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RCloseCurrentEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RCloseCurrentEvent::KeyboardLayoutChange,
DynamicPropertyChange = RCloseCurrentEvent::DynamicPropertyChange,
TabletEnterProximity = RCloseCurrentEvent::TabletEnterProximity,
TabletLeaveProximity = RCloseCurrentEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RCloseCurrentEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RCloseCurrentEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RCloseCurrentEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RCloseCurrentEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RCloseCurrentEvent::MacSizeChange,
ContentsRectChange = RCloseCurrentEvent::ContentsRectChange,
MacGLWindowChange = RCloseCurrentEvent::MacGLWindowChange,
FutureCallOut = RCloseCurrentEvent::FutureCallOut,
GraphicsSceneResize = RCloseCurrentEvent::GraphicsSceneResize,
GraphicsSceneMove = RCloseCurrentEvent::GraphicsSceneMove,
CursorChange = RCloseCurrentEvent::CursorChange,
ToolTipChange = RCloseCurrentEvent::ToolTipChange,
NetworkReplyUpdated = RCloseCurrentEvent::NetworkReplyUpdated,
GrabMouse = RCloseCurrentEvent::GrabMouse,
UngrabMouse = RCloseCurrentEvent::UngrabMouse,
GrabKeyboard = RCloseCurrentEvent::GrabKeyboard,
UngrabKeyboard = RCloseCurrentEvent::UngrabKeyboard,
StateMachineSignal = RCloseCurrentEvent::StateMachineSignal,
StateMachineWrapped = RCloseCurrentEvent::StateMachineWrapped,
TouchBegin = RCloseCurrentEvent::TouchBegin,
TouchUpdate = RCloseCurrentEvent::TouchUpdate,
TouchEnd = RCloseCurrentEvent::TouchEnd,
NativeGesture = RCloseCurrentEvent::NativeGesture,
RequestSoftwareInputPanel = RCloseCurrentEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RCloseCurrentEvent::CloseSoftwareInputPanel,
WinIdChange = RCloseCurrentEvent::WinIdChange,
Gesture = RCloseCurrentEvent::Gesture,
GestureOverride = RCloseCurrentEvent::GestureOverride,
ScrollPrepare = RCloseCurrentEvent::ScrollPrepare,
Scroll = RCloseCurrentEvent::Scroll,
Expose = RCloseCurrentEvent::Expose,
InputMethodQuery = RCloseCurrentEvent::InputMethodQuery,
OrientationChange = RCloseCurrentEvent::OrientationChange,
TouchCancel = RCloseCurrentEvent::TouchCancel,
ThemeChange = RCloseCurrentEvent::ThemeChange,
SockClose = RCloseCurrentEvent::SockClose,
PlatformPanel = RCloseCurrentEvent::PlatformPanel,
StyleAnimationUpdate = RCloseCurrentEvent::StyleAnimationUpdate,
ApplicationStateChange = RCloseCurrentEvent::ApplicationStateChange,
WindowChangeInternal = RCloseCurrentEvent::WindowChangeInternal,
ScreenChangeInternal = RCloseCurrentEvent::ScreenChangeInternal,
PlatformSurface = RCloseCurrentEvent::PlatformSurface,
Pointer = RCloseCurrentEvent::Pointer,
TabletTrackingChange = RCloseCurrentEvent::TabletTrackingChange,
User = RCloseCurrentEvent::User,
MaxUser = RCloseCurrentEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RCloseCurrentEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RCloseCurrentEvent_Wrapper(RJSApi& h, RCloseCurrentEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RCloseCurrentEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RCloseCurrentEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RCloseCurrentEvent_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
            
    // Class: RCloseCurrentEvent
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
          return RJSType_RCloseCurrentEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RCloseCurrentEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RCloseCurrentEvent* getWrapped() const {
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
        RCloseCurrentEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RCloseCurrentEvent*> basecasters_RCloseCurrentEvent;

      public:
        static void registerBasecaster_RCloseCurrentEvent(RJSBasecaster_RCloseCurrentEvent* bc) {
          basecasters_RCloseCurrentEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RCloseCurrentEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RCloseCurrentEvent_Wrapper, "org.qcad.RCloseCurrentEvent_Wrapper")

  
  #endif
  
