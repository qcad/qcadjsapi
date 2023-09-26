
  // Auto generated
  
    #ifndef RSPATIALINDEXVISITOR_H_WRAPPER
    #define RSPATIALINDEXVISITOR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RSpatialIndexVisitor.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RSpatialIndexVisitor
    class RSpatialIndexVisitor_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RSpatialIndexVisitor_Wrapper(const RSpatialIndexVisitor_Wrapper&);

    public:
      // initialization of RSpatialIndexVisitor:
      static void init(RJSApi& handler);

      
        static RSpatialIndexVisitor* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RSpatialIndexVisitor.length(); i++) {
            RJSBasecaster_RSpatialIndexVisitor* basecaster = basecasters_RSpatialIndexVisitor[i];
            RSpatialIndexVisitor* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RSpatialIndexVisitor::getIdStatic()) {
            return (RSpatialIndexVisitor*)vp;
          }

          qWarning() << "RSpatialIndexVisitor::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RSpatialIndexVisitor* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RSpatialIndexVisitor*: wrapper wraps NULL";
          }

          RSpatialIndexVisitor* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RSpatialIndexVisitor*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RSpatialIndexVisitor_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RSpatialIndexVisitor_Wrapper(RJSApi& h, RSpatialIndexVisitor* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RSpatialIndexVisitor_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

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
          return RJSType_RSpatialIndexVisitor::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RSpatialIndexVisitor* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RSpatialIndexVisitor* getWrapped() const {
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
        RSpatialIndexVisitor* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RSpatialIndexVisitor*> basecasters_RSpatialIndexVisitor;

      public:
        static void registerBasecaster_RSpatialIndexVisitor(RJSBasecaster_RSpatialIndexVisitor* bc) {
          basecasters_RSpatialIndexVisitor.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RSpatialIndexVisitor_Wrapper*)

    Q_DECLARE_INTERFACE(RSpatialIndexVisitor_Wrapper, "org.qcad.RSpatialIndexVisitor_Wrapper")

  
  #endif
  
