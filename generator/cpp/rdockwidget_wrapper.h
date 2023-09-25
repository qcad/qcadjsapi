
  // Auto generated
  
    #ifndef RDOCKWIDGET_H_WRAPPER
    #define RDOCKWIDGET_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RDockWidget.h"
      
      // wrapped object is RDockWidget_Base class if new object is created: 
      #include "rdockwidget_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RDockWidget
    class RDockWidget_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RDockWidget_Wrapper(const RDockWidget_Wrapper&);

    public:
      // initialization of RDockWidget:
      static void init(RJSApi& handler);

      
        static RDockWidget* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RDockWidget::getIdStatic()) {
            return (RDockWidget*)vp;
          }

          return nullptr;
          
        }

        static RDockWidget* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RDockWidget*: wrapper wraps NULL";
          }

          RDockWidget* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RDockWidget*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RDockWidget_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RDockWidget_Wrapper(RJSApi& h, RDockWidget* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RDockWidget_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RDockWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RDockWidget_Wrapper
                
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
            
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif


    // non-static functions:
    
    // Class: RDockWidget
    // Function: shown
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void shown(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void shownEmitter(
                
              );
            
    // Class: RDockWidget
    // Function: hidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void hidden(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void hiddenEmitter(
                
              );
            
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif

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
          return RJSType_RDockWidget::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RDockWidget* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RDockWidget* getWrapped() const {
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
          RDockWidget_Base* getWrappedBase() {
            RDockWidget* w = getWrapped();
            return dynamic_cast<RDockWidget_Base*>(w);
          }

          RDockWidget_Base* getWrappedBase() const {
            RDockWidget* w = getWrapped();
            return dynamic_cast<RDockWidget_Base*>(w);
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
          //  RDockWidget_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RDockWidget* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RDockWidget_Wrapper*)

    Q_DECLARE_INTERFACE(RDockWidget_Wrapper, "org.qcad.RDockWidget_Wrapper")

  
  #endif
  