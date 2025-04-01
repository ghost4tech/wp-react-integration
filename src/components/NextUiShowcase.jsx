import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Progress,
  Tabs,
  Tab,
  Switch,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Accordion,
  AccordionItem,
} from "@heroui/react";

const NextUIShowcase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSelected, setIsSelected] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Buttons showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-sm border"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Buttons</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button isDisabled>Disabled</Button>
          <Button isLoading={isLoading} onClick={simulateLoading}>
            {isLoading ? "Loading..." : "Click to Load"}
          </Button>
          <Button color="primary" variant="bordered">
            Bordered
          </Button>
        </div>
      </motion.div>

      {/* Cards showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm border"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Cards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">NextUI Card</p>
                <p className="text-small text-default-500">heroui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Modern, beautiful UI components for React applications</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button size="sm">Read More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardBody>
              <p className="text-lg font-bold">Daily Progress</p>
              <div className="mt-4">
                <p className="text-small text-default-500 mb-1">Coding: 75%</p>
                <Progress color="primary" value={75} className="mb-3" />

                <p className="text-small text-default-500 mb-1">Design: 45%</p>
                <Progress color="secondary" value={45} className="mb-3" />

                <p className="text-small text-default-500 mb-1">Testing: 90%</p>
                <Progress color="success" value={90} />
              </div>
            </CardBody>
          </Card>

          <Card isHoverable isPressable>
            <CardHeader className="text-center">
              <p className="text-lg font-bold">Interactive Card</p>
            </CardHeader>
            <CardBody className="text-center">
              <p>This card has hover and press effects</p>
              <div className="flex justify-center mt-4">
                <Chip color="primary">Hover Me</Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </motion.div>

      {/* Tabs and Accordions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm border"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Tabs & Accordions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium mb-3">Tabs</h3>
            <Tabs aria-label="Options">
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    Content for Photos tab. NextUI tabs support animations and
                    keyboard navigation.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Content for Music tab. NextUI components are fully
                    accessible.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    Content for Videos tab. NextUI helps create beautiful UIs
                    quickly.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>

          <div>
            <h3 className="text-md font-medium mb-3">Accordions</h3>
            <Accordion>
              <AccordionItem key="1" title="What is NextUI?">
                NextUI is a UI library for React that provides a set of
                accessible, reusable, and beautiful components.
              </AccordionItem>
              <AccordionItem key="2" title="How to install?">
                You can install NextUI with npm or yarn:
                <code className="block mt-2 p-2 bg-gray-100 rounded">
                  npm install @heroui/react
                </code>
              </AccordionItem>
              <AccordionItem key="3" title="Is it compatible with WordPress?">
                Yes! NextUI works great with WordPress when integrated with
                React in the admin area.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>

      {/* Form and Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm border"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Forms & Modals
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-medium mb-3">Form Controls</h3>
            <div className="space-y-4">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                labelPlacement="outside"
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                labelPlacement="outside"
              />

              <div className="flex items-center gap-2">
                <Switch isSelected={isSelected} onValueChange={setIsSelected} />
                <span>Remember me</span>
              </div>

              <Button color="primary" className="mt-2">
                Sign In
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium mb-3">Modal Dialog</h3>
            <Button onPress={onOpen} color="secondary">
              Open Modal
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    This is a NextUI modal dialog that's fully accessible and
                    animated with Framer Motion.
                  </p>
                  <p>
                    Modals are perfect for confirmations, settings panels, or
                    forms that don't require a full page.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onOpenChange}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onOpenChange}>
                    Action
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </motion.div>

      {/* Chips showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-sm border"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Chips</h2>

        <div className="flex flex-wrap gap-2">
          <Chip>Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
          <Chip variant="bordered" color="primary">
            Bordered
          </Chip>
          <Chip variant="light" color="secondary">
            Light
          </Chip>
          <Chip variant="flat" color="success">
            Flat
          </Chip>
          <Chip variant="faded" color="warning">
            Faded
          </Chip>
          <Chip variant="shadow" color="danger">
            Shadow
          </Chip>
        </div>
      </motion.div>
    </div>
  );
};

export default NextUIShowcase;
