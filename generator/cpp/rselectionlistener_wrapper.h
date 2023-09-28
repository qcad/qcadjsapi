
  // Auto generated
  
    #ifndef RSELECTIONLISTENER_H_WRAPPER
    #define RSELECTIONLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSelectionListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSelectionListener
    class RSelectionListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSelectionListener_Wrapper(const RSelectionListener_Wrapper&);

    public:
      // initialization of RSelectionListener:
      static void init(RJSApi& handler);

      
        static RSelectionListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RSelectionListener:
          for (int i=0; i<basecasters_RSelectionListener.length(); i++) {
            RJSBasecaster_RSelectionListener* basecaster = basecasters_RSelectionListener[i];
            RSelectionListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RSelectionListener:
          if (t==RJSType_RSelectionListener::getIdStatic()) {
            return (RSelectionListener*)vp;
          }

          qWarning() << "RSelectionListener_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RSelectionListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSelectionListener*: wrapper wraps NULL";
          }

          RSelectionListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSelectionListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSelectionListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSelectionListener_Wrapper(RJSApi& h, RSelectionListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSelectionListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RSelectionListener
    // Function: updateSelectionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateSelectionListener
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_RSelectionListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSelectionListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSelectionListener* getWrapped() const {
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
        RSelectionListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSelectionListener*> basecasters_RSelectionListener;

      public:
        static void registerBasecaster_RSelectionListener(RJSBasecaster_RSelectionListener* bc) {
          basecasters_RSelectionListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSelectionListener_Wrapper*)

    Q_DECLARE_INTERFACE(RSelectionListener_Wrapper, "org.qcad.RSelectionListener_Wrapper")

  
  #endif
  
