/**
 * XPath Evaluator
 * @param {XPathEvaluator} path
 */
export default function xPath(path) { 
  const nodeResult = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return nodeResult.singleNodeValue;
}
