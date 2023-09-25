
  // Auto generated
  
    #ifndef RTOOLMATRIXITEMDELEGATE_H_WRAPPER
    #define RTOOLMATRIXITEMDELEGATE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RToolMatrixItemDelegate.h"
      
      // wrapped object is RToolMatrixItemDelegate_Base class if new object is created: 
      #include "rtoolmatrixitemdelegate_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RToolMatrixItemDelegate
    class RToolMatrixItemDelegate_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RToolMatrixItemDelegate_Wrapper(const RToolMatrixItemDelegate_Wrapper&);

    public:
      // initialization of RToolMatrixItemDelegate:
      static void init(RJSApi& handler);

      
        static RToolMatrixItemDelegate* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RToolMatrixItemDelegate::getIdStatic()) {
            return (RToolMatrixItemDelegate*)vp;
          }

          return nullptr;
          
        }

        static RToolMatrixItemDelegate* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RToolMatrixItemDelegate*: wrapper wraps NULL";
          }

          RToolMatrixItemDelegate* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RToolMatrixItemDelegate*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RToolMatrixItemDelegate_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RToolMatrixItemDelegate_Wrapper(RJSApi& h, RToolMatrixItemDelegate* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RToolMatrixItemDelegate_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RToolMatrixItemDelegate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RToolMatrixItemDelegate_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
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
          return RJSType_RToolMatrixItemDelegate::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RToolMatrixItemDelegate* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RToolMatrixItemDelegate* getWrapped() const {
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
          RToolMatrixItemDelegate_Base* getWrappedBase() {
            RToolMatrixItemDelegate* w = getWrapped();
            return dynamic_cast<RToolMatrixItemDelegate_Base*>(w);
          }

          RToolMatrixItemDelegate_Base* getWrappedBase() const {
            RToolMatrixItemDelegate* w = getWrapped();
            return dynamic_cast<RToolMatrixItemDelegate_Base*>(w);
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
          //  RToolMatrixItemDelegate_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RToolMatrixItemDelegate* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RToolMatrixItemDelegate_Wrapper*)

    Q_DECLARE_INTERFACE(RToolMatrixItemDelegate_Wrapper, "org.qcad.RToolMatrixItemDelegate_Wrapper")

  
  #endif
  