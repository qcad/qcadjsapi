
  // Auto generated
  
    #ifndef RNEWDOCUMENTLISTENER_H_WRAPPER
    #define RNEWDOCUMENTLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RTransaction.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RNewDocumentListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RNewDocumentListener
    class RNewDocumentListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RNewDocumentListener_Wrapper(const RNewDocumentListener_Wrapper&);

    public:
      // initialization of RNewDocumentListener:
      static void init(RJSApi& handler);

      
        static RNewDocumentListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RNewDocumentListener.length(); i++) {
            RJSBasecaster_RNewDocumentListener* basecaster = basecasters_RNewDocumentListener[i];
            RNewDocumentListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RNewDocumentListener::getIdStatic()) {
            return (RNewDocumentListener*)vp;
          }

          qWarning() << "RNewDocumentListener_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RNewDocumentListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RNewDocumentListener*: wrapper wraps NULL";
          }

          RNewDocumentListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RNewDocumentListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RNewDocumentListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RNewDocumentListener_Wrapper(RJSApi& h, RNewDocumentListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RNewDocumentListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RNewDocumentListener
    // Function: updateNewDocumentListener
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateNewDocumentListener
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
          return RJSType_RNewDocumentListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RNewDocumentListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RNewDocumentListener* getWrapped() const {
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
        RNewDocumentListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RNewDocumentListener*> basecasters_RNewDocumentListener;

      public:
        static void registerBasecaster_RNewDocumentListener(RJSBasecaster_RNewDocumentListener* bc) {
          basecasters_RNewDocumentListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RNewDocumentListener_Wrapper*)

    Q_DECLARE_INTERFACE(RNewDocumentListener_Wrapper, "org.qcad.RNewDocumentListener_Wrapper")

  
  #endif
  
