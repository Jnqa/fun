import { Component } from "react";
import Spinner from "../services/base/Spinner";
import ErrorMessage from "../services/base/ErrorMessage";
import ServiceCheck from "../services/ServiceCheck";

class ServiceCard extends Component {
    state = {
      stats: {},
      loading: false,
      error: false,
    };
  
    componentDidMount() {
      this.updateInfo();
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.serviceName !== prevProps.serviceName) {
        this.updateInfo();
      }
    }
  
    ServiceCheck = new ServiceCheck();
  
    onLoaded = (stats) => {
      this.setState({ stats, loading: false });
    };
  
    onLoading = () => {
      this.setState({
        loading: true,
      });
    };
  
    onError = () => {
      this.setState({ loading: false, error: true });
    };
  
    onErrorFalse = () => {
      this.setState({ error: false });
    };
  
    updateInfo = () => {
      const name = this.props.serviceName;
  
      this.onLoading();
      this.ServiceCheck
        .getServices()
        .then(this.onLoaded)
        .then(this.onErrorFalse)
        .catch(this.onError);
    };
  
    render() {
      const { stats, loading, error } = this.state;
      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = !(loading || error) ? <View stats={stats} /> : null;
  
      return (
        <div>
          {errorMessage}
          {spinner}
          {content}
        </div>
      );
    }
  }
  const View = ({ stats }) => {
    // const { output } =
    //   stats;
    const { outputDict } =
    stats;
    let completeOut = ""
    if (outputDict) {
      outputDict.forEach(function(element) {completeOut = completeOut + `\r\n 🔹 ${element.name} - ${element.version}`})
    }
    else
    {
      completeOut="..."
      // completeOut="🔹 docker-controller - v0.1.333 🔹 jq-fun - v0.2.19 🔹 lk-weatherforecast - v0.1.123"
    }

    return (
        <>  
          {completeOut}
        </>
      )
  }
  
  export default ServiceCard;